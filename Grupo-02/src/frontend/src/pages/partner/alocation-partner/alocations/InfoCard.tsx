// InfoCard.tsx
import React from 'react';

interface InfoCardProps {
  startDate?: string;
  endDate?: string;
  responsible?: string;
  phone?: number;
  email?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ startDate, endDate, responsible, phone, email }) => {
  return (
    <div className="text-zinc-600 bg-white p-4 shadow-md rounded-md w-full">
      <h2 className=" font-semibold mb-2 gap-8">Informações</h2>
      <p>Data início: <span className='font-normal'>{startDate}</span></p>
      <p>Data fim: <span className='font-normal'>{endDate}</span></p>
      <p>Responsável: <span className='font-normal'>{responsible}</span></p>
      <p>Telefone: <span className='font-normal'>{phone}</span></p>
      <p>Email: <span className='font-normal font-size-sm'>{email}</span></p>
    </div>
  );
};

export default InfoCard;
