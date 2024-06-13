import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import UserForm from '../../components/UserForm';
import Loader from '../../components/Loader';

import UsersService from '../../services/UsersService';

export default function EditUser() {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');

  // desestrutura o params para id
  const { id } = useParams();
  const history = useHistory();
  const userFormRef = useRef(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const user = await UsersService.getUserById(
          // params.id
          id,
        );

        userFormRef.current.setFieldsValues(user);
        setIsLoading(false);
        setUserName(user.name);
      } catch (error) {
        console.log('error', error);
        history.push('/listuser');

        alert('Usuario nao encontrado!');
      }
    }
    loadUser();
  }, [id, history]);

  async function handleSubmit(formData) {
    // converter variaveis do backend em snake_case para camelCase
    try {
      const user = {
        name: formData.name,
        email: formData.email,
        cpf: formData.cpf,
        senha: formData.password,
        ie: formData.inscription,
      };

      const response = await UsersService.updateUsers(id, user);

      // atualizar o nome do cabeçalho ao atualizar o contato
      const updatedUserData = await UsersService.updateUsers(
        id,
        user,
      );
      setUserName(updatedUserData.name);
      console.log(response);
      console.log('Usuario editado com sucesso');

      // ## implementar posteriormente o toast
      // toast({
      //   type: 'sucess',
      //   text: 'Usuario criado com sucesso',
      // });
    } catch (error) {
      console.log('error', error);
      // toast({
      //   type: 'danger',
      //   text: 'Erro ao cadastrar usuario',
      // });
    }
  }
  return (
    <>
      <Loader isLoading={isLoading} />
      <ContentHeader
        title={isLoading ? 'Carregando...' : `Editar ${userName}`}
        link="/listuser"
      />
      <UserForm
        ref={userFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>

  );
}
