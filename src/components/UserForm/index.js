import PropTypes from 'prop-types';
import { useState } from 'react';

import { Form, ButtonContainer } from './style';

import Input from '../Input';
import FormGroup from '../FormGroup';
import Button from '../Button';

export default function UserForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inscription, setInscription] = useState('');

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
      </ButtonContainer>
    </Form>
  );
}

UserForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
