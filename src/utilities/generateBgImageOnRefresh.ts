const generateBgImageOnRefresh = (galleryGiven: Array<String>) => {
  const randomNum = Math.floor(Math.random() * galleryGiven.length);
  const newImageLink = galleryGiven[randomNum];
  return newImageLink;
};
export { generateBgImageOnRefresh };
