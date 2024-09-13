import React from 'react';

const DownloadButton = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = 'https://ejemplo.com/archivo.pdf';
    link.download = 'archivo.pdf';
    link.click();
  };

  return (
    <button onClick={downloadPDF}>Descargar PDF</button>
  );
};

export default DownloadButton;
