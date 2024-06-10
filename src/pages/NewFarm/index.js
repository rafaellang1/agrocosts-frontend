import ContentHeader from '../../components/ContentHeader';

import FarmsService from '../../services/FarmsService';
import FarmForm from '../../components/FarmForm';

export default function NewFarm() {
  async function handleSubmit(formData) {
    // converter variaveis do backend em snake_case para camelCase
    const farm = {
      name: formData.nameProperty,
      ie: formData.inscription,
      size: formData.sizeProperty,
      location: formData.location,
      user_id: formData.usersId,
    };

    const response = await FarmsService.createFarms(farm);

    console.log(response);
  }
  return (
    <>
      <ContentHeader
        title="Cadastro de Fazendas"
      />
      <FarmForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
