import React, { useState } from "react";
import { Link } from "react-router-dom";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  userEmail: string; 
  password: string; 
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true); 
  const [emailRequired, setEmailRequired] = useState(false); 
  const [passwordRequired, setPasswordRequired] = useState(false); 

  const handleLogin = () => {
    
    if (!validateFields()) {
      return;
    }

    onLogin(userEmail, password);
  };

  
  const validateFields = () => {
    
    if (!userEmail) {
      setEmailRequired(true);
      setEmailValid(true); 
      return false;
    }

    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(userEmail)) {
      setEmailValid(false); 
      setEmailRequired(false); 
      return false;
    }

    
    if (!password) {
      setPasswordRequired(true);
      return false;
    }

    setEmailValid(true); 
    setEmailRequired(false); 
    setPasswordRequired(false); 
    return true;
  };

  return (
    <div className="relative flex flex-col items-center drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] justify-center overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md lg:max-w-xl p6">
        <div className="flex items-center justify-center">
          <img
            src="/src/assets/icons/login-image.svg"
            alt="User Icon"
            className="w-[500px] h-[300px]"
          />
        </div>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-${
                emailValid ? "green-500" : "red-500" 
              } focus:ring-${
                emailValid ? "green-500" : "red-500" 
              } focus:outline-none`}
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
                setEmailValid(true); 
                setEmailRequired(false); 
              }}
              required 
            />
            {emailRequired && (
              <p className="mt-1 text-xs text-red-500">Campo obrigatório</p>
            )}
            {userEmail && !emailValid && (
              <p className="mt-1 text-xs text-red-500">E-mail inválido</p>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-${
                passwordRequired ? "red-500" : "green-500" 
              } focus:ring-${
                passwordRequired ? "red-500" : "green-500" 
              } focus:outline-none`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordRequired(false); 
              }}
              required 
            />
            {passwordRequired && (
              <p className="mt-1 text-xs text-red-500">Campo obrigatório</p>
            )}
          </div>
          <a href="#" className="text-sm text-[#FF4545] hover:underline">
            Esqueceu a senha?
          </a>
          <div className="mt-6">
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#FF4545] rounded-md hover:bg-[#7A2020] focus:outline-none focus:bg-[#9A3939]"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-center text-gray-700">
          Não tem uma conta?{" "}
          <Link
            to="/partner-registration"
            className="text-[#FF4545] hover:underline"
          >
            cadastre-se como parceiro
          </Link>{" "}
          ou{" "}
          <Link
            to="/analyst-registration"
            className="text-[#FF4545] hover:underline"
          >
            como analista
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
