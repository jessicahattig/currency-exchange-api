import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency.js';

document.addEventListener('DOMContentLoaded', () => {
  const currencyForm = document.querySelector('#currencyForm');
  const resultDiv = document.querySelector('#result');

  currencyForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission to avoid page reload

    const amountInput = document.querySelector('#amount');
    const currencySelect = document.querySelector('#currency');
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;

    const exchangeRateData = await CurrencyConverter.getExchangeRate(amount, currency);

    displayResult(exchangeRateData, amount, currency, resultDiv);
  });
});

function displayResult(data, amount, currency, resultDiv) {
  if (data.result === 'error') {
    resultDiv.textContent = data['error-type'];
  } else {
    const targetRate = data.conversion_rate;
    const convertedAmount = (amount * targetRate).toFixed(2);
    resultDiv.textContent = `${amount} USD is approximately ${convertedAmount} ${currency}`;
  }
}