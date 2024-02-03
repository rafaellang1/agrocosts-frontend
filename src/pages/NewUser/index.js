import ContentHeader from '../../components/ContentHeader';
import UserForm from '../../components/UserForm';

export default function NewUser() {
  return (
    <>
      <ContentHeader
        title="Cadastro de Usuários"
      />
      <UserForm
        buttonLabel="Cadastrar"
      />
    </>

  );
}
