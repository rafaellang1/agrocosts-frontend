import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { Form, ButtonContainer } from './style';

import Input from '../Input';
import Select from '../Select';
import FormGroup from '../FormGroup';
import Button from '../Button';
import UsersService from '../../services/UsersService';

export default function FarmForm({ buttonLabel, onSubmit }) {
  const [productId, setProductId] = useState('001');
  const [nameProperty, setNameProperty] = useState('');
  const [inscription, setInscription] = useState('');
  const [sizeProperty, setSizeProperty] = useState('');
  const [location, setLocation] = useState('');
  const [usersId, setUsersId] = useState('');
  const [users, setUsers] = useState([]);

  // req para API para solicitar os dados dos users para popular o botao: usuario no formulario
  // useEffect(() => {
  //   fetch('http://localhost:3001/users')
  //     .then(async (response) => {
  //       const json = await response.json();
  //       setUsers(json);
  //     })
  //     .catch((error) => {
  //       console.log('erro', error);
  //     });
  // }, []);

  useEffect(() => {
    async function loadUsers() {
      try {
        const usersList = await UsersService.listUsers();
        setUsers(usersList);
      } catch (error) {
        console.log('error', error);
      }
    }
    loadUsers();
  }, []);

  function handleProductIdChange(event) {
    setProductId(event.target.value);
  }

  function handleNamePropertyChange(event) {
    setNameProperty(event.target.value);
  }

  function handleInscriptionChange(event) {
    setInscription(event.target.value);
  }

  function handleSizePropertyChange(event) {
    setSizeProperty(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      nameProperty, inscription, sizeProperty, location, usersId,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Código fazenda"
          value={productId}
          onChange={handleProductIdChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Nome da Propriedade"
          value={nameProperty}
          onChange={handleNamePropertyChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Inscrição Estadual"
          value={inscription}
          onChange={handleInscriptionChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Tamanho da Propriedade (em hectares)"
          value={sizeProperty}
          onChange={handleSizePropertyChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Localização"
          value={location}
          onChange={handleLocationChange}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={usersId}
          onChange={(event) => setUsersId(event.target.value)}
        >
          <option value="">Sem usuario</option>

          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

FarmForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
