import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  useState, useEffect, forwardRef, useImperativeHandle,
} from 'react';

import { Form, ButtonContainer } from './style';

import Input from '../Input';
import Select from '../Select';
import FormGroup from '../FormGroup';
import Button from '../Button';
import FarmsService from '../../services/FarmsService';
import HarvestsService from '../../services/HarvestsService';

const ProductForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
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
  const [isFormValid, setIsFormValid] = useState(false);

  // Verifica se todos os campos estão preenchidos
  useEffect(() => {
    const allFieldsFilled = (
      name && description && quantity && aplicationArea && unitValue && farms && harvests
    );
    setIsFormValid(allFieldsFilled);
  }, [name, description, quantity, aplicationArea, unitValue, farms, harvests]);

  useImperativeHandle(ref, () => ({

    setFieldValues: (product) => {
      setName(product.name ?? '');
      setDescription(product.description ?? '');
      setQuantity(product.quantity ?? '');
      setAplicationArea(product.aplication_area ?? '');
      setunitaryValue(product.unit_value ?? '');
      setFarmsId(product.farm_id ?? '');
      setHarvestsId(product.harvest_id ?? '');
    },
  }), []);

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
  // (DB calcula automatico o totalValue)

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
      <span>Todos os campos são obrigatórios *</span>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>

        <Link to="/listproduct">
          <Button style={{ backgroundColor: '#0A3D00' }}>Listar Produtos</Button>
        </Link>
      </ButtonContainer>

    </Form>

  );
});

ProductForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
