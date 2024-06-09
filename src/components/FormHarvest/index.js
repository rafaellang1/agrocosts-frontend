import PropTypes from 'prop-types';
import { useState } from 'react';

import { Form, ButtonContainer } from './style';

import Input from '../Input';
import FormGroup from '../FormGroup';
import Button from '../Button';

export default function FormHarvest({ buttonLabel }) {
  const [harvestYear, setHarvestYear] = useState('');
  const [productName, setProductName] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleHarvestYearChange(event) {
    setHarvestYear(event.target.value);
  }

  function handleProductNameChange(event) {
    setProductName(event.target.value);
  }

  function handleInitialDateChange(event) {
    setInitialDate(event.target.value);
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Informe o produto que será utilizado"
          value={productName}
          onChange={handleProductNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Informe o ano da safra vigente"
          value={harvestYear}
          onChange={handleHarvestYearChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="date"
          placeholder="Data de inicio da safra"
          value={initialDate}
          onChange={handleInitialDateChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="date"
          placeholder="Data prevista para a finalização da Safra"
          value={endDate}
          onChange={handleEndDateChange}
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

FormHarvest.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
