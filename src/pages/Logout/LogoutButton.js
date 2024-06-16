import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../contexts/AuthContext';
import { Button } from './stylesLogoutButton';

function LogoutButton({ onLogout }) {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout(); // Chama a função de logout do contexto de autenticação
      if (typeof onLogout === 'function') {
        onLogout(); // Chama a função de logout passada por props
      } else {
        alert('Voce desconectou, faça login novamente para continuar');
      }
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return <Button type="button" onClick={handleLogout}>Sair</Button>;
}

LogoutButton.propTypes = {
  onLogout: PropTypes.bool.isRequired,
};

export default LogoutButton;
