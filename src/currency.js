export default class CurrencyConverter {
  static async getExchangeRate(amount = 1, toCurrency = 'EUR') {
    const apiKey = process.env.API_KEY;
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/${toCurrency}/${amount}`);
      const jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) {
      return { result: 'error', 'error-type': error.message };
    }
  }
}