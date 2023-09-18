import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, status }) => {
  let statusColorClass = '';
  if (status === 'em espera') {
    statusColorClass = 'bg-yellow-500';
  } else if (status === 'em andamento') {
    statusColorClass = 'bg-blue-500';
  } else if (status === 'concluído') {
    statusColorClass = 'bg-green-500';
  }

  return (
    <div className="w-full h-full bg-[#D9D9D9] drop-shadow-[0_4px_4px_rgba(0,0,0,10%)] ring-1 ring-gray-300 rounded-[10px] p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-gray-700 font-bold mb-2">{title}</h2>
        <div className="mb-2">
          {/* Aplicar a classe de cor com base no status */}
          <span className={`text-white text-xs px-2 py-1 rounded ${statusColorClass}`}>
            {status}
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-2" style={{ maxHeight: '3rem', overflow: 'hidden' }}>
          {description}
        </p>
      </div>
      <button className="bg-red-500 text-white text-lg rounded-md py-2 px-4 hover:bg-red-600 transition-colors">
        Visualizar projeto
      </button>
    </div>
  );
};

export default ProjectCard;
