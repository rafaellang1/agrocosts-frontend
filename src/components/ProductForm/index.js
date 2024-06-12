import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Form, ButtonContainer } from './style';

import Input from '../Input';
import Select from '../Select';
import FormGroup from '../FormGroup';
import Button from '../Button';
import FarmsService from '../../services/FarmsService';
import HarvestsService from '../../services/HarvestsService';

export default function ProductForm({ buttonLabel, onSubmit, link }) {
  const [productId, setProductId] = useState('001');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [aplicationArea, setAplicationArea] = useState('');
  const [unitValue, setunitaryValue] = useState('');
  // const [totalValue, setTotalValue] = useState('');
  const [farms, setFarms] = useState([]);
  const [farmsId, setFarmsId] = useState('');
  const [harvests, setHarvests] = useState([]);
  const [harvestsId, setHarvestsId] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [farmResponse, harvestResponse] = await Promise.all([
  //         fetch('http://localhost:3001/farms'),
  //         fetch('http://localhost:3001/harvests'),
  //       ]);

  //       const farmData = await farmResponse.json();
  //       const harvestData = await harvestResponse.json();

  //       setFarms(farmData);
  //       setHarvests(harvestData);
  //     } catch (error) {
  //       console.log('erro', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    async function loadFarms() {
      try {
        const farmsList = await FarmsService.listFarms();
        setFarms(farmsList);
      } catch (error) {
        console.log('error', error);
      }
    }

    async function loadHarvests() {
      try {
        const harvestsList = await HarvestsService.listHarvests();
        setHarvests(harvestsList);
      } catch (error) {
        console.log('error', error);
      }
    }
    loadFarms();
    loadHarvests();
  }, []);

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

  // function handleTotalValueChange(event) {
  //   setTotalValue(event.target.value);
  // }

  const handleSubmit = (event) => {
    // Previne o Form de redirecionar a pagina ao enviar o form pelo submit
    event.preventDefault();

    onSubmit({
      name, description, quantity, aplicationArea, unitValue, farmsId, harvestsId,
    });
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
      {/*
      <FormGroup>
        <Input
          placeholder="Valor total"
          value={totalValue}
          onChange={handleTotalValueChange}
        />
      </FormGroup> */}

      <FormGroup>
        <Select
          placeholder="Selecione a propriedade que será utilizado o produto"
          value={farmsId}
          onChange={(event) => setFarmsId(event.target.value)}
        >
          <option value="Selecione a fazenda">Selecione a fazenda para utilização</option>

          {farms.map((farm) => (
            <option key={farm.id} value={farm.id}>
              {farm.name}
            </option>
          ))}
        </Select>

      </FormGroup>

      <FormGroup>
        <Select
          placeholder="Selecione a safra atual"
          value={harvestsId}
          onChange={(event) => setHarvestsId(event.target.value)}
        >
          <option value="Selecione a safra">Selecione a safra atual</option>

          {harvests.map((harvest) => (
            <option key={harvest.id} value={harvest.id}>
              {harvest.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>

        <Link to={link}>
          <Button>Listar Produtos</Button>
        </Link>
      </ButtonContainer>

    </Form>

  );
}

ProductForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
};
