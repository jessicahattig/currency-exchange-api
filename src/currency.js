export default class CurrencyConverter {
  static async getExchangeRate(amount = 1, fromCurrency = 'USD', toCurrency = 'EUR') {
    try {
      const apiKey = process.env.API_KEY;
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`);
      const jsonifiedResponse = await response.json();

      if (jsonifiedResponse.result === 'error') {
        const errorMessage = `API Error: ${jsonifiedResponse['error-type']}`;
        throw new Error(errorMessage);
      }

      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}
