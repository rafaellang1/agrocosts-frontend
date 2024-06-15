import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { HarvestButtonContainer, HarvestButton, Header } from './styles';
import HarvestsService from '../../services/HarvestsService';

export default function HarvestSelect() {
  const [harvests, setHarvest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFarms() {
      setIsLoading(true);
      try {
        const harvestList = await HarvestsService.listHarvests();
        setHarvest(harvestList);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    }
    loadFarms();
  }, []);
  return (
    <>
      <Header>
        <strong>
          {/* se 1 singular, se + de 1 plural */}
          {harvests.length}
          {harvests.length === 1 ? ' safra cadastrada' : ' safras cadastradas'}
        </strong>
      </Header>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <HarvestButtonContainer>
          {harvests.map((harvest) => (
            <Link to={`/costreport/${harvest.name}`} key={harvest.id}>
              <HarvestButton>{harvest.name}</HarvestButton>
            </Link>
          ))}
        </HarvestButtonContainer>
      )}
    </>
  );
}

// HarvestSelect.propTypes = {
//   harvest: PropTypes.arrayOf(PropTypes.string),
// };

// HarvestSelect.defaultProps = {
//   harvest: ['Milho 2023'],
// };
