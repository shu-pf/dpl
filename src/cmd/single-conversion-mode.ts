import { translateText } from '../api/translate-text';

const singleConversionMode = async (setting: {
  apiType: string;
  authKey: string | undefined;
  targetLang: string;
}) => {
  // 2番目以降の引数を合わせて一つの文字列にする
  const string = process.argv.slice(2).join(' ');

  const translatedText = await translateText(string, setting);

  console.log(translatedText);
  process.exit(0);
};

export { singleConversionMode };
