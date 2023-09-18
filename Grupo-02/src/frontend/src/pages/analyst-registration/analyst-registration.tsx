import React, { useState } from 'react';
import { AnalystDto } from '../../api/dtos/analyst.dto';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { postAnalystRegistration } from '../../api/services/post-analyst-registration';

const AnalystRegistration: React.FC = () => {
  const [analystData, setAnalystData] = useState<AnalystDto>({
    name: '',
    password: '',
    email: '',
    role: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setAnalystData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const history = useNavigate();
  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      const response = await postAnalystRegistration(analystData);

      console.log('Analista cadastrado:', response);
      localStorage.setItem('userType', 'analyst');
      history('/home');
    } catch (error) {
      console.error('Erro ao cadastrar analista:', error);
    }
  };

  return (
    <div className="relative flex flex-col items-center drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] justify-center overflow-hidden">
    <div className="bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] rounded p-6 w-[50%]">
      <div className="p-8 rounded bg-white">
        <h1 className="font-medium text-2xl">Cadastro de analista</h1>
        <p className="text-gray-600 mt-6 text-xl">
          Cadastre-se aqui como um analista de iniciativas para conseguir avaliar e/ou acompanhar o andamento dos projetos
        </p>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              value={analystData.name}
              onChange={handleInputChange}
              required
              className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-[#7A2020] focus:ring-[#7A2020] focus:outline-none"
            />

            <label htmlFor="password" className="text-sm text-gray-700 block mb-1 font-medium">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              value={analystData.password}
              onChange={handleInputChange}
              required
              className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-[#7A2020] focus:ring-[#7A2020] focus:outline-none"
            />

            <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email@inteli.edu.br"
              value={analystData.email}
              onChange={handleInputChange}
              required
              className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-[#7A2020] focus:ring-[#7A2020] focus:outline-none"
            />

            <label htmlFor="role" className="text-sm text-gray-700 block mb-1 font-medium">
              Cargo
            </label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="(ex. Analista)"
              value={analystData.role}
              onChange={handleInputChange}
              required
              className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md transition-colors duration-[500ms] transform focus:border-[#7A2020] focus:ring-[#7A2020] focus:outline-none"
            />
          <div className="space-x-4 mt-8">
            <button
              type="submit"
              className="text-xl py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50"
            >
              Cadastrar
            </button>
            <Link to="/">
            <button
              type="button"
              className="text-xl py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
              Cancelar
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AnalystRegistration;
