import PropTypes from 'prop-types';
import { useState } from 'react';

import { Form, ButtonContainer } from './style';

import Input from '../Input';
import FormGroup from '../FormGroup';
import Button from '../Button';

export default function ProductForm({ buttonLabel }) {
  const [productId, setProductId] = useState('001');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [aplicationArea, setAplicationArea] = useState('');
  const [unitaryValue, setunitaryValue] = useState('');
  const [amount, setAmout] = useState('');
  const [propety, setPropety] = useState('');

  function handleProductIdChange(event) {
    setProductId(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleAplicationAreaChange(event) {
    setAplicationArea(event.target.value);
  }

  function handleUnitaryValueChange(event) {
    setunitaryValue(event.target.value);
  }

  function handleAmoutchange(event) {
    setAmout(event.target.value);
  }

  function handlePropetyChange(event) {
    setPropety(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          value={productId}
          onChange={handleProductIdChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Nome do Produto"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Descrição"
          value={description}
          onChange={handleDescriptionChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Quantidade"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Area de aplicação em hectares"
          value={aplicationArea}
          onChange={handleAplicationAreaChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Valor unitário"
          value={unitaryValue}
          onChange={handleUnitaryValueChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Valor total"
          value={amount}
          onChange={handleAmoutchange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Selecione a propriedade que será utilizado o produto"
          value={propety}
          onChange={handlePropetyChange}
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

ProductForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
