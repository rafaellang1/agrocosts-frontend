import PropTypes from 'prop-types';
import { useState } from 'react';

import { Form, ButtonContainer } from './style';

import Input from '../Input';
import FormGroup from '../FormGroup';
import Button from '../Button';

export default function FarmForm({ buttonLabel }) {
  const [productId, setProductId] = useState('001');
  const [nameProperty, setNameProperty] = useState('');
  const [inscription, setInscription] = useState('');
  const [sizeProperty, setSizeProperty] = useState('');
  const [location, setLocation] = useState('');

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
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Código do produto"
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
};
