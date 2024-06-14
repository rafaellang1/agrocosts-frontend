import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Container, Header, Card } from './style';

import FarmsService from '../../services/FarmsService';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export default function ListUser() {
  const [farms, setFarms] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [farmBeingDeleted, setFarmBeingDeleted] = useState(null);

  useEffect(() => {
    async function loadFarms() {
      try {
        setIsloading(true);
        const farmsList = await FarmsService.listFarms();
        setFarms(farmsList);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsloading(false);
      }
    }
    loadFarms();
  }, []);

  // Mostrar o user no modal a ser deleted e habilitar o modal
  function handleDeleteFarm(farm) {
    setFarmBeingDeleted(farm);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    // limpa o estado após deletar ou cancelar
    setFarmBeingDeleted(null);
  }

  async function handleConfirmDeleteFarm() {
    try {
      await FarmsService.deleteFarms(farmBeingDeleted.id);
      alert('Fazenda deletada com sucesso');

      // reseta o estado da pagina para remover o contato deletado
      setFarms((prevState) => prevState.filter(
        (farm) => farm.id !== farmBeingDeleted.id,
      ));

      // fecha o modal ap[os a delecao
      handleCloseDeleteModal();
    } catch {
      alert('Erro ao deletar fazenda');
    }
  }

  return (
    <Container>

      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja deletar a fazenda "${farmBeingDeleted?.name}"?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteFarm}

      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      <Header>
        <strong>
          {/* se 1 singular, se + de 1 plural */}
          {farms.length}
          {farms.length === 1 ? ' fazenda cadastrada' : ' fazendas cadastradas'}
        </strong>
      </Header>

      {/* Faz um map p/ buscar as farms cadastradas e retornar um novo arr com os mesmos dados */}
      {farms.map((farm) => (
        <Card key={farm.id}>
          <div className="info">
            <div className="user-name">
              <strong>{farm.name}</strong>
              <small>
                propietario:
                {' '}
                {farm.user_name}
              </small>
              <span>
                Inscrição Estadual:
                {' '}
                {farm.ie}
              </span>
              <span>
                {farm.size}
                {' '}
                hectares
              </span>
              <span>
                Localização:
                {' '}
                {farm.location}
              </span>

            </div>

            <div className="actions">
              <Link to={`/editfarm/${farm.id}`}>
                <img src={edit} alt="Edit" width="30" />
              </Link>
              <button type="button" onClick={() => handleDeleteFarm(farm)}>
                <img src={trash} alt="Delete" width="30" />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
}
