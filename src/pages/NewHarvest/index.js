import ContentHeader from '../../components/ContentHeader';

import FormHarvest from '../../components/FormHarvest';

export default function NewHarvest() {
  return (
    <>
      <ContentHeader
        title="Cadastro da Safra Atual"
      />
      <FormHarvest
        buttonLabel="Cadastrar"
      />
    </>
  );
}
