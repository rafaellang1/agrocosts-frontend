import ContentHeader from '../../components/ContentHeader';
import FarmForm from '../../components/FarmForm';

export default function EditFarm() {
  return (
    <>
      <ContentHeader
        title="Editar Fazendas"
        link="/listfarm"
      />
      <FarmForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
