import PropTypes from 'prop-types';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';

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

  useImperativeHandle(ref, () => ({

    // nullish operator -> null ou undefined para a direita ''
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
  }

  function handleCpfChange(event) {
    setCpf(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleInscriptionChange(event) {
    setInscription(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name, cpf, email, password, inscription,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="CPF"
          value={cpf}
          onChange={handleCpfChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Inscrição Estadual"
          value={inscription}
          onChange={handleInscriptionChange}
        />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>

        <Link to="/listuser">
          <Button style={{ backgroundColor: '#a9a9a9' }}>Listar Usuarios</Button>
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
