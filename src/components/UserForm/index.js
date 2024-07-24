import PropTypes from 'prop-types';
import {
  useState, useEffect, forwardRef, useImperativeHandle,
} from 'react';
import { Link } from 'react-router-dom';

// import isEmailValid from '../../utils/isEmailValid';
import { Form, ButtonContainer } from './style';

import Input from '../Input';
import FormGroup from '../FormGroup';
import Button from '../Button';

// eslint-disable-next-line react/prop-types
const UserForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inscription, setInscription] = useState('');
  const [errors, setErrors] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Verifica se todos os campos estão preenchidos
    const allFieldsFilled = name && email && cpf && inscription && password;
    setIsFormValid(allFieldsFilled);
  }, [name, email, cpf, inscription, password]);

  useImperativeHandle(ref, () => ({

    // nullish operator -> null ou undefined vai para a direita e adiciona string vazia ''
    setFieldsValues: (user) => {
      setName(user.name ?? '');
      setCpf(user.cpf ?? '');
      setEmail(user.email ?? '');
      setPassword(user.senha ?? '');
      setInscription(user.ie ?? '');
    },
  }), []);

  function handleNameChange(event) {
    setName(event.target.value);

    // validacao do campo nome no form
    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Campo nome é obrigatório.' },
      ]);
    } else {
      // remove logs de nome invalido
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    // validacao do campo nome no form
    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'Campo email é obrigatório.' },
      ]);
    } else {
      // remove logs de nome invalido
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
    }
  }

  function handleCpfChange(event) {
    setCpf(event.target.value);
    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'cpf', message: 'Campo CPF é obrigatório.' },
      ]);
    } else {
      // remove logs de nome invalido
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'cpf',
      ));
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'password', message: 'Campo senha é obrigatório.' },
      ]);
    } else {
      // remove logs de nome invalido
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'password',
      ));
    }
  }

  function handleInscriptionChange(event) {
    setInscription(event.target.value);
    // validacao do campo nome no form
    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'inscription', message: 'Inscrição Estadual é obrigatória.' },
      ]);
    } else {
      // remove logs de nome invalido
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'inscription',
      ));
    }
  }

  // capturar a mensagem de erro do log de nome obrigatorio
  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name, cpf, email, password, inscription,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          type="email"
          placeholder="Email *"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('cpf')}>
        <Input
          error={getErrorMessageByFieldName('cpf')}
          placeholder="CPF *"
          value={cpf}
          onChange={handleCpfChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('password')}>
        <Input
          error={getErrorMessageByFieldName('password')}
          type="password"
          placeholder="Senha *"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('inscription')}>
        <Input
          error={getErrorMessageByFieldName('inscription')}
          placeholder="Inscrição Estadual *"
          value={inscription}
          onChange={handleInscriptionChange}
        />
      </FormGroup>
      <span>Todos os campos são obrigatórios *</span>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>

        <Link to="/listuser">
          <Button style={{ backgroundColor: '#0A3D00' }}>Listar Usuarios</Button>
        </Link>
      </ButtonContainer>

    </Form>
  );
});

UserForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
