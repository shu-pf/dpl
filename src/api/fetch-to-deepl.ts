import axios from 'axios';
import url from 'url';
import { languageOptions } from '../const/languageOptions';

interface Props {
  text: string;
  targetLang: keyof typeof languageOptions;
  authKey: string;
  apiType: 'free' | 'pro';
}

/**
 * DeepL APIに翻訳リクエストを送る
 */
const postTranslateAPI = ({ text, targetLang, authKey, apiType }: Props) => {
  const path = `https://api${
    apiType === 'free' ? '-free' : ''
  }.deepl.com/v2/translate?auth_key=${authKey}`;

  const params = new url.URLSearchParams({
    text,
    target_lang: targetLang,
  });

  return axios.post(path, params.toString());
};

export { postTranslateAPI };
