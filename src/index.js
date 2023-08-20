import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './currency.js';

document.addEventListener('DOMContentLoaded', () => {
  const currencyForm = document.querySelector('#currencyForm');
  const amountInput = document.querySelector('#amount');
  const currencySelect = document.querySelector('#currency');
  const resultDiv = document.querySelector('#result');

  currencyForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission to avoid page reload

    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;

    if (isNaN(amount) || amount <= 0 || amount > 1000000) {
      resultDiv.textContent = 'Please enter a valid amount up to 1 million USD.';
      return;
    }

    try {
      const exchangeRateData = await CurrencyConverter.getExchangeRate(amount, 'USD', currency);

      if (exchangeRateData['result'] === 'error') {
        resultDiv.textContent = exchangeRateData['error-type'];
      } else {
        const targetRate = exchangeRateData.conversion_rate;
        const convertedAmount = (amount * targetRate).toFixed(2);

        resultDiv.textContent = `${amount} USD is approximately ${convertedAmount} ${currency}`;
      }
    } catch (error) {
      resultDiv.textContent = 'An error occurred while fetching the exchange rate.';
    }
  });
});