export default class CurrencyConverter {
  static async getCurrencyCodes() {
    try {
      const apiKey = process.env.API_KEY;
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
      const jsonifiedResponse = await response.json();

      if (jsonifiedResponse.result === 'error') {
        const errorMessage = `API Error: ${jsonifiedResponse['error-type']}`;
        throw new Error(errorMessage);
      }

      return jsonifiedResponse.currencies;
    } catch (error) {
      return error;
    }
  }
}