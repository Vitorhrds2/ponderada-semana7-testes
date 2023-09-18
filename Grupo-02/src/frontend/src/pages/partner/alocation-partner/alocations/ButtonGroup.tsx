// ButtonGroup.tsx
import React from 'react';

interface ButtonGroupProps {
  setSelectedComponent: (component: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ setSelectedComponent }) => {
  return (
    <div className="flex space-x-4 mt-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setSelectedComponent('tapi')}
      >
        Tapi/Descrição
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md"
        onClick={() => setSelectedComponent('feedback')}
      >
        Dar Feedback
      </button>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded-md"
        onClick={() => setSelectedComponent('metaprojeto')}
      >
        Metaprojeto/Artefatos
      </button>
    </div>
  );
};

export default ButtonGroup;
