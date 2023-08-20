import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency.js';

document.addEventListener('DOMContentLoaded', () => {
  const currencyForm = document.querySelector('#currencyForm');
  const resultDiv = document.querySelector('#result');

  currencyForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const amountInput = document.querySelector('#amount');
    const currencySelect = document.querySelector('#currency');
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;

    try {
      const convertedAmount = await CurrencyConverter.convertCurrency(amount, currency);

      resultDiv.textContent = `${amount} USD is approximately ${convertedAmount} ${currency}`;
    } catch (error) {
      resultDiv.textContent = 'An error occurred while converting the currency.';
    }
  });
});