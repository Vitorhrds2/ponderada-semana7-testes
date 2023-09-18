// InfoCard.tsx
import React from 'react';
import { ModuleEntity } from '../../../../../api/entities/module-entity';

interface InfoCardProps {
  moduleData: ModuleEntity[];
}

const InfoCard: React.FC<InfoCardProps> = ({ moduleData }) => {
  return (
    <div>
      {moduleData.map((module) => (
        <div className="text-zinc-600 bg-white p-4 shadow-md rounded-md w-full" key={module.id}>
          <h2 className="font-semibold mb-2 gap-8">Informações</h2>
          <p>Nome do Módulo: <span className='font-normal'>{module.moduleName}</span></p>
          <p>Data de Início: <span className='font-normal'>{module.beginData.toLocaleDateString()}</span></p>
          <p>Curso: <span className='font-normal'>{module.courseCode}</span></p>
          {/* <p>Responsável: <span className='font-normal'>{module.responsible}</span></p>
          <p>Telefone: <span className='font-normal'>{module.phone}</span></p>
          <p>Email: <span className='font-normal font-size-sm'>{module.email}</span></p> */}
        </div>
      ))}
    </div>
  );
};

export default InfoCard;

