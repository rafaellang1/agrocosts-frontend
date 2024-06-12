import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Container, Header, Card } from './style';

import ProductsService from '../../services/ProductsService';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export default function ListUser() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const productsList = await ProductsService.listProducts();
        setProducts(productsList);
      } catch (error) {
        console.log('error', error);
      }
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <Header>
        <strong>
          {products.length}
          {products.length === 1 ? ' produto cadastrado' : ' produtos cadastrados'}
        </strong>
      </Header>

      {/* Faz um map p/ buscar as farms cadastradas e retornar um novo arr com os mesmos dados */}
      {products.map((product) => (
        <Card key={product.id}>
          <div className="info">
            <div className="user-name">
              <strong>{product.name}</strong>
              <small>
                Descrição:
                {' '}
                {product.description}
              </small>
              <span>
                Quantidade:
                {' '}
                {product.quantity}
              </span>
              <span>
                Area de aplicação:
                {' '}
                {product.aplication_area}
                {' '}
                hectares
              </span>
              <span>
                Valor total:
                {' '}
                {product.total_value}
              </span>
              <span>
                Fazenda:
                {' '}
                {product.farm_name}
              </span>
              <span>
                Safra:
                {' '}
                {product.harvest_name}
              </span>

            </div>
            <div className="actions">
              <Link to={`/editproduct/${product.id}`}>
                <img src={edit} alt="Edit" width="30" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" width="30" />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
}
