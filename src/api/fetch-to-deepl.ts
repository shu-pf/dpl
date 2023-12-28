import axios from 'axios';
import url from 'url';
import { languageOptions } from '../const/languageOptions';

// interface Request {
//   text: string;
//   target_lang: string;
// }

// interface Response {
//   data: {
//     translations: {
//       detected_source_language: string;
//       text: string;
//     }[];
//   };
// }

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
    apiType == 'free' && '-free'
  }.deepl.com/v2/translate?auth_key=${authKey}`;

  const params = new url.URLSearchParams({
    text,
    target_lang: targetLang,
  });

  // FIXME: 1つ目のgenericsの型指定に何を入れるべきかわからない
  return axios.post(path, params.toString());
};

export { postTranslateAPI };
