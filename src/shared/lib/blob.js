const base64ToBlob = (base64) => {
  const byteCharacters = atob(base64.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/png' });

  const blobUrl = window.URL.createObjectURL(blob);

  return blobUrl;
};

export const blobDownload = (base64) => {
  const blobUrl = base64ToBlob(base64);

  const downloadLink = document.createElement('a');
  downloadLink.href = blobUrl;
  downloadLink.download = 'image.png';

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  window.URL.revokeObjectURL(blobUrl);
};
