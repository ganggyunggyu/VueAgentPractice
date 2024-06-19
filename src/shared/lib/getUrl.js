export const getUrl = (url) => {
  const srcIndex = url.indexOf('/static');
  const srcPath = url.substring(srcIndex);
  return srcPath;
};
