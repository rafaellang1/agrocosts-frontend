import HttpClient from './utils/HttpClient';

// o consumo das API sera nas classes abaixo
class UsersService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listUsers() {
    return this.httpClient.get('/users');
  }

  getUserById(id) {
    return this.httpClient.get(`/users/${id}`);
  }

  createUsers(user) {
    return this.httpClient.post('/users', user);
  }

  updateUsers(id, user) {
    return this.httpClient.put(`/users/${id}`, user);
  }
}

export default new UsersService();
