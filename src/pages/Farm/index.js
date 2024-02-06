import ContentHeader from '../../components/ContentHeader';

import FarmForm from '../../components/FarmForm';

export default function Farm() {
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
