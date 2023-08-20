export default class CurrencyConverter {
  static async convertCurrency(amount, currency) {
    try {
      const apiKey = process.env.API_KEY;
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/${currency}/${amount}`);
      const exchangeData = await response.json();

      if (exchangeData.result === 'error') {
        const errorMessage = `API Error: ${exchangeData['error-type']}`;
        throw new Error(errorMessage);
      }

      return exchangeData.conversion_result;
    } catch (error) {
      return error;
    }
  }
}