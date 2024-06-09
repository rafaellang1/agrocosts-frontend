import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Container, Header, Card } from './style';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export default function ReportResult() {
  const [farms, setFarms] = useState([]);

  // utilizar o useEffect para previnir que o fetch seja disparado a cada letra digitada
  // passamos o arr vazio ao final para o effect nao ser renderizado a cada renderizacao do compon.
  useEffect(() => {
    fetch('http://localhost:3001/farms')
      .then(async (response) => {
        const json = await response.json();
        setFarms(json);
      })
      .catch((error) => {
        // só cai no catch se for problema de conexao, caso for status code o catch nao captura
        console.log('erro', error);
      });
  }, []);

  // console.log(farms);

  return (
    <Container>

      <Header>
        <strong>
          {/* se 1 singular, se + de 1 plural */}
          {farms.length}
          {farms.length === 1 ? ' fazenda cadastrada' : ' fazendas cadastradas'}
        </strong>
      </Header>

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
