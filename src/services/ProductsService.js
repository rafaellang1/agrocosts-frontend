import HttpClient from './utils/HttpClient';

// o consumo das API sera nas classes abaixo
class ProductsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listProducts() {
    return this.httpClient.get('/products');
  }

  createProducts(product) {
    return this.httpClient.post('/products', product);
  }
}

export default new ProductsService();
