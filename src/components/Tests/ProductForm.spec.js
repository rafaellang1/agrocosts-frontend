import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductForm from '../../components/ProductForm';
import FarmsService from '../../services/FarmsService';
import HarvestsService from '../../services/HarvestsService';

jest.mock('../../services/FarmsService');
jest.mock('../../services/HarvestsService');

describe('ProductForm Component', () => {
  const mockFarms = [
    { id: '1', name: 'Farm 1' },
    { id: '2', name: 'Farm 2' },
  ];

  const mockHarvests = [
    { id: '1', name: 'Harvest 1' },
    { id: '2', name: 'Harvest 2' },
  ];

  beforeEach(() => {
    FarmsService.listFarms.mockResolvedValue(mockFarms);
    HarvestsService.listHarvests.mockResolvedValue(mockHarvests);
  });

  test('calls onSubmit with form data when submitted', async () => {
    const handleSubmit = jest.fn();

    render(
      <Router>
        <ProductForm buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
      </Router>
    );

    fireEvent.change(await screen.findByPlaceholderText('Nome do Produto'), { target: { value: 'Produto Teste' } });
    fireEvent.change(await screen.findByPlaceholderText('Descrição'), { target: { value: 'Descrição Teste' } });
    fireEvent.change(await screen.findByPlaceholderText('Quantidade'), { target: { value: '10' } });
    fireEvent.change(await screen.findByPlaceholderText('Area de aplicação em hectares'), { target: { value: '20' } });
    fireEvent.change(await screen.findByPlaceholderText('Valor unitário'), { target: { value: '100' } });

    // Usando getByPlaceholderText para selecionar a fazenda e a safra
    fireEvent.change(screen.getByPlaceholderText('Selecione a propriedade que será utilizado o produto'), { target: { value: '1' } });
    fireEvent.change(screen.getByPlaceholderText('Selecione a safra atual'), { target: { value: '1' } });

    fireEvent.submit(screen.getByText('Salvar alterações'));

    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'Produto Teste',
      description: 'Descrição Teste',
      quantity: '10',
      aplicationArea: '20',
      unitValue: '100',
      farmsId: '1',
      harvestsId: '1',
    });
  });
});
