import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import EditProduct from '../../pages/EditProduct';
import ProductsService from '../../services/ProductsService';

jest.mock('../../components/ProductForm', () => {
  const ProductForm = React.forwardRef(({ buttonLabel, onSubmit }, ref) => {
    const setFieldValues = jest.fn();

    // Simulação de um formulário simples para o mock
    return (
      <form ref={ref} onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <button type="submit">{buttonLabel}</button>
      </form>
    );
  });

  return ProductForm;
});

// Mock do ProductsService para simular chamadas de serviço
jest.mock('../../services/ProductsService');

describe('EditProduct Page', () => {
  const mockProduct = {
    id: '1',
    name: 'Produto Teste',
    description: 'Descrição Teste',
    quantity: '10',
    aplication_area: '20',
    unit_value: '100',
    farm_id: '1',
    harvest_id: '1',
  };

  test('loads product and submits form', async () => {
    // Simula getProductById para resolver com o mockProduct
    ProductsService.getProductById.mockResolvedValue(mockProduct);

    render(
      <Router>
        <EditProduct />
      </Router>
    );

    // Aguarda o carregamento do produto
    expect(await screen.findByText('Carregando...')).toBeInTheDocument();

    // Aguarda o fim do carregamento do produto
    expect(await screen.findByText('Editar produto Produto Teste')).toBeInTheDocument();

    // Simula a submissão do formulário
    fireEvent.submit(screen.getByText('Salvar alterações'));

    // Verifica se a função de atualização foi chamada com os dados corretos
    expect(ProductsService.updateProducts).toHaveBeenCalledWith('1', {
      name: 'Produto Teste',
      description: 'Descrição Teste',
      quantity: '10',
      aplication_area: '20',
      unit_value: '100',
      farm_id: '1',
      harvest_id: '1',
    });
  });

  test('handles error when product is not found', async () => {
    // Simula getProductById para rejeitar a promessa (produto não encontrado)
    ProductsService.getProductById.mockRejectedValue(new Error('Produto não encontrado'));

    render(
      <Router>
        <EditProduct />
      </Router>
    );

    // Aguarda o redirecionamento
    expect(await screen.findByText('Produto nao encontrado!')).toBeInTheDocument();
  });
});
