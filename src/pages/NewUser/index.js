import ContentHeader from '../../components/ContentHeader';
import UserForm from '../../components/UserForm';
import UsersService from '../../services/UsersService';

export default function NewUser() {
  // enviar os dados do form para o backend
  async function handleSubmit(formData) {
    // converter variaveis do backend em snake_case para camelCase
    const user = {
      name: formData.name,
      email: formData.email,
      cpf: formData.cpf,
      senha: formData.password,
      ie: formData.inscription,
    };

    const response = await UsersService.createUsers(user);

    console.log(response);
    alert('Usuario cadastrado com sucesso');
  }
  return (
    <>
      <ContentHeader
        title="Cadastro de Usuários"
        link="/"
      />
      <UserForm
        buttonLabel="Cadastrar Usuário"
        onSubmit={handleSubmit}
      />

    </>

  );
}
