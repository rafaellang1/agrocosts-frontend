import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import FarmForm from '../../components/FarmForm';
import Loader from '../../components/Loader';

import FarmsService from '../../services/FarmsService';

export default function EditFarm() {
  const [isLoading, setIsLoading] = useState(true);
  const [farmName, setFarmName] = useState('');

  const { id } = useParams();
  const history = useHistory();
  const farmFormRef = useRef(null);

  useEffect(() => {
    async function loadFarm() {
      try {
        const farm = await FarmsService.getFarmById(
          id,
        );

        farmFormRef.current.setFieldValues(farm);
        setIsLoading(false);
        setFarmName(farm.name);
      } catch (error) {
        console.log('error', error);
        history.push('/listfarm');

        alert('Fazenda nao encontrada!');
      }
    }
    loadFarm();
  }, [id, history]);

  async function handleSubmit(formData) {
    // converter variaveis do backend em snake_case para camelCase
    try {
      const farm = {
        name: formData.nameProperty,
        ie: formData.inscription,
        size: formData.sizeProperty,
        location: formData.location,
        user_id: formData.usersId,
      };
      const response = await FarmsService.updateFarms(id, farm);
      console.log(response);

      const updatedFarmData = await FarmsService.updateFarms(
        id,
        farm,
      );
      setFarmName(updatedFarmData.name);
      console.log('Fazenda editada com sucesso');

      console.log(response);
    } catch {
      alert('Erro ao editar fazenda');
    }
  }

  return (
    <>

      <Loader isLoading={isLoading} />
      <ContentHeader
        title={isLoading ? 'Carregando...' : `Editar fazenda ${farmName}`}
        link="/listfarm"
      />
      <FarmForm
        ref={farmFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
