import HttpClient from './utils/HttpClient';

// o consumo das API sera nas classes abaixo
class ProductsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listProducts() {
    return this.httpClient.get('/products');
  }

  getProductById(id) {
    return this.httpClient.get(`/products/${id}`);
  }

  createProducts(product) {
    return this.httpClient.post('/products', product);
  }

  updateProducts(id, product) {
    return this.httpClient.put(`/products/${id}`, product);
  }

  deleteProducts(id) {
    return this.httpClient.delete(`/products/${id}`);
  }
}

export default new ProductsService();
