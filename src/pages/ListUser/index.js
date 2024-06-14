import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Container, Header, Card } from './style';

import UsersService from '../../services/UsersService';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [userBeingDeleted, setUserBeingDeleted] = useState(null);

  // utilizar o useEffect para previnir que o fetch seja disparado a cada letra digitada
  // passamos o arr vazio ao final para o effect nao ser renderizado a cada renderizacao do compon.
  // useEffect(() => {
  //   fetch('http://localhost:3001/users')
  //     .then(async (response) => {
  //       const json = await response.json();
  //       setUsers(json);
  //     })
  //     .catch((error) => {
  //       // só cai no catch se for problema de conexao, caso for status code o catch nao captura
  //       console.log('erro', error);
  //     });
  // }, []);

  // console.log(farms);

  // refactor
  useEffect(() => {
    async function loadUsers() {
      try {
        setIsloading(true);
        const usersList = await UsersService.listUsers();
        setUsers(usersList);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsloading(false);
      }
    }
    loadUsers();
  }, []);

  // Mostrar o user no modal a ser deleted e habilitar o modal
  function handleDeleteUser(user) {
    setUserBeingDeleted(user);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    // limpa o estado após deletar ou cancelar
    setUserBeingDeleted(null);
  }

  // funcao para delecao de usuario - abre no Modal
  async function handleConfirmDeleteUser() {
    try {
      await UsersService.deleteUsers(userBeingDeleted.id);
      alert('Usuario deletado com sucesso');

      // reseta o estado da pagina para remover o contato deletado
      setUsers((prevState) => prevState.filter(
        (user) => user.id !== userBeingDeleted.id,
      ));

      // fecha o modal ap[os a delecao
      handleCloseDeleteModal();
    } catch {
      alert('Erro ao deletar usuario');
    }
  }

  return (
    <Container>

      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja deletar o usuario "${userBeingDeleted?.name}"?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteUser}

      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      <Header>
        <strong>
          {/* se 1 singular, se + de 1 plural */}
          {users.length}
          {users.length === 1 ? ' usuario cadastrado' : ' usuarios cadastrados'}
        </strong>
      </Header>

      {/* Faz um map p/ buscar as farms cadastradas e retornar um novo arr com os mesmos dados */}
      {users.map((user) => (
        <Card key={user.id}>
          <div className="info">
            <div className="user-name">
              <strong>{user.name}</strong>
              <small>
                CPF:
                {' '}
                {user.cpf}
              </small>
              <span>
                email:
                {' '}
                {user.email}
              </span>
              <span>
                Inscrição Estadual:
                {' '}
                {user.ie}
              </span>

            </div>

            <div className="actions">
              <Link to={`/edituser/${user.id}`}>
                <img src={edit} alt="Edit" width="30" />
              </Link>
              <button type="button" onClick={() => handleDeleteUser(user)}>
                <img src={trash} alt="Delete" width="30" />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
}
