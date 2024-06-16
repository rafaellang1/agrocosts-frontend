import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import ListUser from '../../pages/ListUser';

jest.mock('../../components/Loader', () => function () {
  return <div>Carregando...</div>;
});

jest.mock('../../components/Modal', () => ({
  __esModule: true,
  default: ({
    visible, title, onCancel, onConfirm,
  }) => (
    visible ? (
      <div>
        <div>{title}</div>
        <button onClick={onCancel}>Cancelar</button>
        <button onClick={onConfirm}>Deletar</button>
      </div>
    ) : null
  ),
}));

const mockProducts = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição do Produto 1',
    quantity: 10,
    aplication_area: 20,
    total_value: 1000,
    farm_name: 'Fazenda 1',
    current_harvest: 'Soja 2023',
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Descrição do Produto 2',
    quantity: 15,
    aplication_area: 30,
    total_value: 1500,
    farm_name: 'Fazenda 2',
    current_harvest: 'Milho 2023',
  },
];

describe('ListUser Component', () => {
  test('renders products correctly', () => {
    // Mock useState to return the mock products
    React.useState = jest.fn()
      .mockReturnValueOnce([mockProducts, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])
      .mockReturnValueOnce([null, jest.fn()]);

    render(
      <Router>
        <ListUser />
      </Router>,
    );

    expect(screen.getByText('2 usuarios cadastrados')).toBeInTheDocument();
    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
  });

  test('opens and closes delete modal', () => {
    // Mock useState to return the mock products
    const setIsDeleteModalVisible = jest.fn();
    const setProductBeingDeleted = jest.fn();

    React.useState = jest.fn()
      .mockReturnValueOnce([mockProducts, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])
      .mockReturnValueOnce([false, setIsDeleteModalVisible])
      .mockReturnValueOnce([null, setProductBeingDeleted]);

    render(
      <Router>
        <ListUser />
      </Router>,
    );

    fireEvent.click(screen.getAllByAltText('Delete')[0]);

    expect(setProductBeingDeleted).toHaveBeenCalledWith(mockProducts[0]);
    expect(setIsDeleteModalVisible).toHaveBeenCalledWith(true);
  });

  test('renders loading state', () => {
    // Mock useState to return loading state
    React.useState = jest.fn()
      .mockReturnValueOnce([[], jest.fn()])
      .mockReturnValueOnce([true, jest.fn()])
      .mockReturnValueOnce([false, jest.fn()])
      .mockReturnValueOnce([null, jest.fn()]);

    render(
      <Router>
        <ListUser />
      </Router>,
    );

    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });
});
