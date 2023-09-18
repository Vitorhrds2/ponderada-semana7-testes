import React, { useState } from 'react';
import LoginForm from '../login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../api/services/post-login';
// import './LoginForm.css';

const LoginPage: React.FC = () => {
  
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  
  const history = useNavigate();

  const closeErrorModal = () => {
    setIsErrorVisible(false);
  };

  
  const handleLogin = async (email: string, password: string) => {
    try {
      
      setIsLoading(true);
      setError(null); 

      const credentials = { email, password };
      const user = await postLogin(credentials);

      if (user) {
        console.log('Usuário válido. Redirecionando...');
        localStorage.setItem('userType', user.userType);
        document.title = 'Logado'
        
        history(user.userType === 'partner' ? '/home-partner' : '/home');
      } else {
        console.log('Usuário com email inválido.');
        setError('Email ou senha inválidos'); 
        setIsErrorVisible(true); 
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Ocorreu um erro durante o login. Tente novamente mais tarde.'); 
      setIsErrorVisible(true);
    } finally {
      
      setIsLoading(false);

      
      setShowLoginForm(true);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <div className="loading-text">Carregando...</div>
        </div>
      ) : (
        
        showLoginForm && (
          <LoginForm
            onLogin={handleLogin}
            userEmail="" 
            password=""
          />
        )
      )}

{isErrorVisible && (
        <div className="error-modal">
          <div className="error-card">
            <div className="exclamation-icon">
              <img src='/src/assets/icons/exclamation-icon.svg' />
            </div>
            <h2>Atenção</h2>
            <p>{error}</p>
            <button onClick={closeErrorModal}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
