import React from 'react';

interface ModuleCardProps {
  moduleName: string;
  description: string;
  status: string;
  course: string;
  /* beginData: Date; */
}

const ModuleProjectCard: React.FC<ModuleCardProps> = ({ moduleName, description, status, course/* , beginData */ }) => {
  let statusColorClass = '';
  if (status === 'Active' || status === 'Ativo') {
    statusColorClass = 'bg-yellow-500';
  } else if (status === 'InProgress') {
    statusColorClass = 'bg-blue-500';
  } else if (status === 'approved') {
    statusColorClass = 'bg-green-500';
  }

  return (
    <div className="w-full h-full bg-[#D9D9D9] drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] ring-1 ring-gray-300 rounded-[10px] p-4 flex flex-col justify-between">
      <h2 className="text-gray-700 font-bold mb-2">{moduleName}</h2>
      <div className="mb-2">
        {/* Aplicar a classe de cor com base no status */}
        <span className={`text-white text-xs px-2 py-1 rounded ${statusColorClass}`}>
          {status}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <p className="text-gray-500 text-sm mb-4">{course}</p>
      {/* <p className="text-gray-500 text-sm mb-4">{beginData}</p> */}
  
      <button className="w-full bg-red-500 text-white text-lg rounded-md py-2 px-4 hover:bg-red-600 transition-colors">
        Visualizar Módulo
      </button>
    </div>
  );
};

export default ModuleProjectCard;