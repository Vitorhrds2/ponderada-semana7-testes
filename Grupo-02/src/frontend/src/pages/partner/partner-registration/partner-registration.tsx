import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import options from './options';
import { PartnerDto } from '../../../api/dtos/partner.dto';
import { postPartnerRegistration } from '../../../api/services/post-partner-registration';
import { Link, useNavigate } from 'react-router-dom';

interface SelectInputProps {
  label: string;
  id: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  required: boolean;
}

const CustomSelectInput: React.FC<SelectInputProps> = ({ label, id, options, value, onChange, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full text-sm focus:outline-gray-500 border border-gray-300 px-2 py-1 rounded-md"
    >
      <option value="">Selecione uma opção</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const PartnerRegistration: React.FC = () => {
  const [partnerData, setPartnerData] = useState<PartnerDto>({
    partnerName: '',
    sector: '',
    contactEmail: '',
    contactPhone: '',
    rateForProject: 0,
    password: '',
    branch: '',
    representativeJob: '',
  });

  const history = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = event.target;
    const newValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;

    setPartnerData((prevData) => ({
      ...prevData,
      [id]: newValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await postPartnerRegistration(partnerData);
      console.log('Partner created:', response);
      localStorage.setItem('userType','partner');
      history('/home-partner');
    } catch (error) {
      console.error('Error creating partner:', error);
    }
  };

  return (
<div className="min-h-screen w-full flex items-center justify-center">
      <div className="bg-white rounded p-6 w-full lg:w-[50%] lg:drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] p6">
        <h1 className="font-medium text-2xl text-center">Cadastro de parceiro</h1>
        <p className="text-gray-600 mt-4 text-xl text-center">
          Cadastre-se como parceiro aqui para cadastrar, acompanhar e receber informações sobre suas iniciativas e parcerias em projetos.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <TextInput label="Nome" id="partnerName" placeholder="Digite o nome" onChange={handleInputChange} required />
            <TextInput label="Email" id="contactEmail" placeholder="seuemail@provedor.com" onChange={handleInputChange} required />
            <TextInput label="Telefone" id="contactPhone" placeholder="(xx) xxxxx-xxxx" onChange={handleInputChange} required />
            <TextInput label="Nome da Empresa" id="branch" placeholder="Digite o nome da empresa" onChange={handleInputChange} required />
            <TextInput label="Cargo" id="representativeJob" placeholder="(ex. desenvolvedor)" onChange={handleInputChange} required />

            <CustomSelectInput
              label="Qual área?"
              id="sector"
              options={options.area}
              value={partnerData.sector}
              onChange={handleInputChange}
              required
            />

            <TextInput label="Defina uma senha" id="password" placeholder="(ex. senha123)" onChange={handleInputChange} required isPassword />

            <CustomSelectInput
              label="Qual segmento de atuação da Empresa?"
              id="branch"
              options={options.segment}
              value={partnerData.branch}
              onChange={handleInputChange}
              required
            />

            <div className="space-y-2">
              <p className="text-sm text-gray-700 font-medium">Quero ser avisado sobre os eventos e lives do Escritório de Projetos</p>
              <label className="text-sm">
                <input type="radio" name="notifications" value="sim" className="mr-2" onChange={handleInputChange} /> Sim
              </label>
              <label className="text-sm ml-4">
                <input type="radio" name="notifications" value="nao" className="mr-2" onChange={handleInputChange} /> Não
              </label>
            </div>

            <div className="text-sm text-gray-700">
              <label htmlFor="communications" className="block mb-1 font-medium">
                <input type="checkbox" id="communications" className="mr-2" onChange={handleInputChange} />
                Quero receber as comunicações do Escritório de Projetos
              </label>
            </div>
          </div>

          <div className="mt-6 space-x-2 text-center">
            <button
              type="submit"
              className="text-lg py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50"
            >
              Cadastrar-se
            </button>
            <Link to="/">
              <button
                className="text-lg py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
              >
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerRegistration;
