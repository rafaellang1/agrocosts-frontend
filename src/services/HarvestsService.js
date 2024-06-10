import HttpClient from './utils/HttpClient';

// o consumo das API sera nas classes abaixo
class HarvestsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listHarvests() {
    return this.httpClient.get('/harvests');
  }
}

export default new HarvestsService();
