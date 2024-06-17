import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import Input from '../../components/Input';
import {
  StyledLabel, Header, Container, Form, Button,
} from './styles';
import FormGroup from '../../components/FormGroup';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, senha);
      history.push('/');
    } catch (error) {
      alert('Credencial Invalida, tente novamente!');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Header>
            Acesso ao sistema
          </Header>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <Input
            id="email"
            type="email"
            value={email}
            placeholder="Informe seu email cadastrado"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <StyledLabel htmlFor="senha">Senha</StyledLabel>
          <Input
            id="senha"
            type="password"
            value={senha}
            placeholder="Informe sua senha"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit">Acessar</Button>
        <span>
          Não tem cadastro?
          {' '}
          <Link to="/user">Crie sua conta</Link>
        </span>
      </Form>
    </Container>
  );
}
