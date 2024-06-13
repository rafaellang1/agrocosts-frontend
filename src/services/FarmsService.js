import HttpClient from './utils/HttpClient';

// o consumo das API sera nas classes abaixo
class FarmsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listFarms() {
    return this.httpClient.get('/farms');
  }

  getFarmById(id) {
    return this.httpClient.get(`/farms/${id}`);
  }

  createFarms(farm) {
    return this.httpClient.post('/farms', farm);
  }

  updateFarms(id, farm) {
    return this.httpClient.put(`/farms/${id}`, farm);
  }
}

export default new FarmsService();
