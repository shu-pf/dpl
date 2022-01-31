const { translateText } = require("../util/translate-text");

exports.singleConversionMode = async (setting) => {
  const translatedText = await translateText(process.argv[2], setting);

  console.log(translatedText);
  process.exit(0);
};
