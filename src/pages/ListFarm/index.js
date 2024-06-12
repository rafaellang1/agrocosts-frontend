import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Container, Header, Card } from './style';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import FarmsService from '../../services/FarmsService';

export default function ListUser() {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    async function loadFarms() {
      try {
        const farmsList = await FarmsService.listFarms();
        setFarms(farmsList);
      } catch (error) {
        console.log('error', error);
      }
    }
    loadFarms();
  }, []);

  return (
    <Container>

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
