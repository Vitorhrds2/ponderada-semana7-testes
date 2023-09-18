import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import FullHeightCard from './FullHeightCard';
import DocumentViewer from './DocumentViewer'; // Importe o componente DocumentViewer aqui

import FeedbackComponent from './FeedbackComponent';

const InfoInitiative: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [pdfUrl, setPdfUrl] = useState<string | null>(null); // Estado para armazenar a URL do PDF inserida pelo usuário

  const handleUrlChange = () => {
    const inputElement = document.getElementById('urlDocumento') as HTMLInputElement;
    if (inputElement) {
      setPdfUrl(inputElement.value);
      setSelectedComponent('tapi'); // Define o componente selecionado como "tapi" para renderizar o PDF
    }
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'tapi':
        // Renderize o componente DocumentViewer com a URL do documento PDF inserida pelo usuário
        return pdfUrl ? <DocumentViewer pdfUrl={pdfUrl} /> : null;
      case 'feedback':
        // Renderize o componente de feedback
        return <FeedbackComponent />;
      case 'metaprojeto':
        // Renderize o componente correspondente
        return <div>Metaprojeto/Artefatos</div>;
      default:
        return <FullHeightCard />;
    }
  };

  return (
    <div className="overflow-auto relative grid flex-col rounded-xl justify-center items-center h-max bg-gray-100 shadow-xl p-8">
      <div>
        <input id='urlDocumento' type="text" placeholder="Insira a URL do PDF" />
        <button onClick={handleUrlChange}>Renderizar PDF</button>
      </div>
      <ButtonGroup setSelectedComponent={setSelectedComponent} />
      <hr className="w-[90%] border-t border-gray-300 my-4" />
      <div className="w-full p-4">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default InfoInitiative;
