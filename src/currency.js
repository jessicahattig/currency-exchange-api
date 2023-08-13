export default class CurrencyConverter {
  static async getExchangeRate() {
    try {
      const apiKey = process.env.API_KEY;
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/EUR`);
      const jsonifiedResponse = await response.json();
      
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}\n${jsonifiedResponse.message}`;
        throw new Error(errorMessage);
      }
      
      return jsonifiedResponse;
    } catch (error) {
      return error;
    }
  }
}

