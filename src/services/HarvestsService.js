import HttpClient from './utils/HttpClient';

// o consumo das API sera nas classes abaixo
class HarvestsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listHarvests() {
    return this.httpClient.get('/harvests');
  }

  async createHarvests(harvest) {
    return this.httpClient.post('/harvests', harvest);
  }
}

export default new HarvestsService();
