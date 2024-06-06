import PropTypes from 'prop-types';
import { useState } from 'react';

import { Form, ButtonContainer } from './style';

import Input from '../Input';
import Select from '../Select';
import FormGroup from '../FormGroup';
import Button from '../Button';

export default function ProductForm({ buttonLabel }) {
  const [productId, setProductId] = useState('001');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [aplicationArea, setAplicationArea] = useState('');
  const [unitValue, setunitaryValue] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [property, setProperty] = useState('');
  const [harvest, setHarvest] = useState('');

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

  function handleUnitValueChange(event) {
    setunitaryValue(event.target.value);
  }

  function handleTotalValueChange(event) {
    setTotalValue(event.target.value);
  }

  function handlePropertyChange(event) {
    setProperty(event.target.value);
  }

  function handleHarvestChange(event) {
    setHarvest(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Previne o Form de redirecionar a pagina ao enviar o form pelo submit
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
          value={unitValue}
          onChange={handleUnitValueChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Valor total"
          value={totalValue}
          onChange={handleTotalValueChange}
        />
      </FormGroup>

      <FormGroup>
        <Select
          placeholder="Selecione a propriedade que será utilizado o produto"
          value={property}
          onChange={handlePropertyChange}
        >
          <option value="Selecione a fazenda">Selecione a fazenda</option>
          <option value="Terere">Terere</option>
          <option value="Mato Grande">Mato Grande</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Select
          placeholder="Selecione a safra atual"
          value={harvest}
          onChange={handleHarvestChange}
        >
          <option value="Selecione a safra">Selecione a safra</option>
          <option value="Soja 2023">Soja 2023</option>
          <option value="Milho 2023">Soja 2023</option>
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

ProductForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
