import ContentHeader from '../../components/ContentHeader';
import UserForm from '../../components/UserForm';

export default function EditUser() {
  return (
    <>
      <ContentHeader
        title="Editar Usuários"
      />
      <UserForm
        buttonLabel="Salvar alterações"
      />
    </>

  );
}
