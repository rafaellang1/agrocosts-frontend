import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoutButton from './LogoutButton';

function Logout() {
  const history = useHistory();

  // Redireciona para a página de login após o logout
  const handleLogout = () => {
    history.push('/login');
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Você foi desconectado com sucesso.</p>
      <LogoutButton onLogout={handleLogout} />
    </div>
  );
}

export default Logout;
