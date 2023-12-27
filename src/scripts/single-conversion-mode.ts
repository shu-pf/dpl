const { translateText } = require('../util/translate-text');

const singleConversionMode = async (setting) => {
  const translatedText = await translateText(process.argv[2], setting);

  console.log(translatedText);
  process.exit(0);
};

export { singleConversionMode };
