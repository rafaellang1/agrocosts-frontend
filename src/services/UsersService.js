import HttpClient from './utils/HttpClient';

// o consumo das API sera nas classes abaixo
class UsersService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listUsers() {
    return this.httpClient.get('/users');
  }

  async createUsers(user) {
    return this.httpClient.post('/users', user);
  }
}

export default new UsersService();
