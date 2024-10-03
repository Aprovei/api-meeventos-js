const Api = require("./Api");

class Client extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);

    this.path = `${baseURL}api/v1/clients`
  }

  // Método que utiliza o GET para obter dados
  async getData(id = null) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    return await this.get(endpoint);
  }

}

module.exports = Client;
