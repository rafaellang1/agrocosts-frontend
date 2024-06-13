import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Container, Header, Card } from './style';

import UsersService from '../../services/UsersService';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import Loader from '../../components/Loader';

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);

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

  return (
    <Container>
      <Loader isLoading={isLoading} />
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
