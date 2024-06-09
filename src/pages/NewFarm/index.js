import ContentHeader from '../../components/ContentHeader';

import FarmForm from '../../components/FarmForm';

export default function NewFarm() {
  return (
    <>
      <ContentHeader
        title="Cadastro de Fazendas"
      />
      <FarmForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
