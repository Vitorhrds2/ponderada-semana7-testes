// FullHeightCard.tsx
import React from 'react';

const FullHeightCard: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md flex-grow">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Nome</th>
            <th className="border p-2">Idade</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border p-2">João</td>
            <td className="border p-2">25</td>
            <td className="border p-2">joao@example.com</td>
          </tr>
          <tr>
            <td className="border p-2">Maria</td>
            <td className="border p-2">30</td>
            <td className="border p-2">maria@example.com</td>
          </tr>
          {/* Adicione mais linhas conforme necessário */}
        </tbody>
      </table>
    </div>
  );
};

export default FullHeightCard;
