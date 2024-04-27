import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';
import TextWithHover from './shared/TextWithHover';

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'role']);

  const handleLogout = async () => {
    try {
      await makeAuthenticatedPOSTRequest('/auth/logout', {}); // Make a POST request to logout endpoint
      removeCookie('token'); // Remove the 'token' cookie
      removeCookie('role'); // Remove the 'role' cookie
      navigate('/login'); // Navigate to the login page after logout
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="block" onClick={handleLogout}>
      <TextWithHover displayText="Logout" />
    </div>
  );
};

export default Logout;