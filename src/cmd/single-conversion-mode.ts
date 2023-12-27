import { translateText } from '../api/translate-text';

const singleConversionMode = async (setting: {
  apiType: string;
  authKey: string | undefined;
  targetLang: string;
}) => {
  const translatedText = await translateText(process.argv[2], setting);

  console.log(translatedText);
  process.exit(0);
};

export { singleConversionMode };
