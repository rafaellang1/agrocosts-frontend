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
      <LogoutButton onLogout={handleLogout} />
    </div>
  );
}

export default Logout;
