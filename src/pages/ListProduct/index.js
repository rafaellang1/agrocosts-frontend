import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Container, Header, Card } from './style';

import ProductsService from '../../services/ProductsService';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export default function ListUser() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [productBeingDeleted, setProductBeingDeleted] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      setIsloading(true);
      try {
        const productsList = await ProductsService.listProducts();
        setProducts(productsList);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsloading(false);
      }
    }
    loadProducts();
  }, []);

  // Mostrar o user no modal a ser deleted e habilitar o modal
  function handleDeleteProduct(product) {
    setProductBeingDeleted(product);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    // limpa o estado após deletar ou cancelar
    setProductBeingDeleted(null);
  }

  async function handleConfirmDeleteProduct() {
    try {
      await ProductsService.deleteProducts(productBeingDeleted.id);
      alert('Produto deletado com sucesso');

      // reseta o estado da pagina para remover o contato deletado
      setProducts((prevState) => prevState.filter(
        (product) => product.id !== productBeingDeleted.id,
      ));

      // fecha o modal ap[os a delecao
      handleCloseDeleteModal();
    } catch {
      alert('Erro ao deletar produto');
    }
  }

  return (
    <Container>

      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja deletar o produto "${productBeingDeleted?.name}"?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteProduct}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

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
                Safra referência:
                {' '}
                {product.current_harvest}
              </span>

            </div>
            <div className="actions">
              <Link to={`/editproduct/${product.id}`}>
                <img src={edit} alt="Edit" width="30" />
              </Link>
              <button type="button" onClick={() => handleDeleteProduct(product)}>
                <img src={trash} alt="Delete" width="30" />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
}
