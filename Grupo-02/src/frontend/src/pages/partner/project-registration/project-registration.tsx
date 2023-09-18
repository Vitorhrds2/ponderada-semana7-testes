import React from 'react';
import FormField from '../../../components/FormField.tsx';
import options from '../partner-registration/options.tsx';

const ProjectRegistration: React.FC = () => {
  return (
    <div className="flex items-center drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] justify-center flex-col h-full w-full">
      <div className="m-8 p-8 rounded bg-white">
        <h1 className="font-medium text-2xl">Cadastro de iniciativa</h1>
        <p className="text-gray-600 mt-6 text-xl">
          Cadastre aqui a sua iniciativa, ela será avaliada e poderá se tornar um projeto.
        </p>
        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Telefone" id="phone" placeholder="+55" required />
          <FormField label="Nome da Empresa" id="companyName" placeholder="Digite o nome da empresa" required />
          <FormField label="Tipo de organização parceira" id="partnerType" type="select" options={options.organizationType} required placeholder={''} />
          <FormField
              label="Em qual projeto você deseja se inscrever?"
              id="project"
              type="select"
              options={options.project}
              required placeholder={''}          />

          <FormField
            label="Descreva seu Problema"
            id="problemDescription"
            type="textarea"
            placeholder="Como o problema ocorre? Como é o cenário atualmente? Qual o limitador atual? Qual indicador gostaria de melhorar? Como seria o cenário ideal? Fato/Dado/Indicador que comprove a percepção da empresa"
            required
          />

          <FormField
            label="Já existe algo desenvolvido para a solução? Trazer o AS/IS (se houver)"
            id="solutionExisting"
            type="textarea"
            placeholder="..."
          />

          <FormField
            label="Como você imagina a entrega da solução final? Qual a sua expectativa/desejo?"
            id="solutionExpectation"
            type="textarea"
            placeholder="..."
          />

          <FormField
            label="Usuário da solução (Quem irá utilizar a solução)"
            id="solutionUser"
            type="text"
            placeholder="..."
          />

          <FormField
              label="Aceito receber comunições referentes ao processo de seleção do Edital de Projetos"
              id="notifications"
              type="checkbox"
              placeholder=''
            />

          <FormField label="5+5=?" id="captcha" type="text" placeholder="Responda a pergunta de segurança" required />
        </div>

        <div className="space-x-4 mt-8">
          <button
            type="submit"
            className="text-xl py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 disabled:opacity-50"
          >
            Submeter inscrição
          </button>
          <button
            className="text-xl py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ProjectRegistration;