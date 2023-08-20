import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency.js';

document.addEventListener('DOMContentLoaded', async () => {
  const currencyForm = document.querySelector('#currencyForm');
  const resultDiv = document.querySelector('#result');

  const conversionRates = await CurrencyConverter.getConversionRates();

  const currencySelect = document.querySelector('#currency');
  for (const currencyCode in conversionRates) {
    const option = document.createElement('option');
    option.value = currencyCode;
    option.textContent = currencyCode;
    currencySelect.appendChild(option);
  }

  currencyForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const amountInput = document.querySelector('#amount');
    const currency = currencySelect.value;
    const amount = parseFloat(amountInput.value);

    const exchangeRateData = await CurrencyConverter.getExchangeRate(amount, currency);

    displayResult(exchangeRateData, amount, currency, resultDiv);
  });
});