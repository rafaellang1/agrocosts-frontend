import ContentHeader from '../../components/ContentHeader';
import UseForm from '../../components/UserForm';

export default function NewUser() {
  return (
    <>
      <ContentHeader
        title="Cadastro de Usuários"
      />
      <UseForm
        buttonLabel="Cadastrar"
      />
    </>

  );
}
