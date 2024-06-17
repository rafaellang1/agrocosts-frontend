import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { Form, ButtonContainer } from './style';

import Input from '../Input';
import FormGroup from '../FormGroup';
import Button from '../Button';

export default function FormHarvest({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Verifica se todos os campos estão preenchidos
    const allFieldsFilled = name && initialDate && endDate;
    setIsFormValid(allFieldsFilled);
  }, [name, initialDate, endDate]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleInitialDateChange(event) {
    setInitialDate(event.target.value);
  }

  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name, initialDate, endDate,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Informe a Cultura e o Ano Safra"
          value={name}
          onChange={handleNameChange}
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
      <span>Todos os campos são obrigatórios *</span>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

FormHarvest.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,

};
