import ContentHeader from '../../components/ContentHeader';
import FormHarvest from '../../components/FormHarvest';
import HarvestsService from '../../services/HarvestsService';

export default function NewHarvest() {
  async function handleSubmit(formData) {
    // converter variaveis do backend em snake_case para camelCase
    const harvest = {
      name: formData.name,
      start_date: formData.initialDate,
      end_date: formData.endDate,
    };

    const response = await HarvestsService.createHarvests(harvest);

    console.log(response);
    alert('Safra cadastrada com sucesso');
  }
  return (
    <>
      <ContentHeader
        title="Cadastro da Safra Atual"
        link="/"

      />
      <FormHarvest
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
