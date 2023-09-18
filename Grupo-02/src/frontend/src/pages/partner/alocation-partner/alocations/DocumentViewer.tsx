import React from 'react';

interface DocumentViewerProps {
  pdfUrl: string; // URL de visualização direta do Google Drive
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ pdfUrl }) => {
  return (
    <div>
      <iframe
        src={pdfUrl}
        width="100%"
        height="500px" // Altura desejada para o visualizador de PDF
        title="PDF Viewer"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default DocumentViewer;
