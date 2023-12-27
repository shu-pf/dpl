import axios from 'axios';
import url from 'url';

const fetchToDeepl = function (
  text: string,
  {
    apiType,
    authKey,
    targetLang,
  }: { apiType: string; authKey: string | undefined; targetLang: string }
) {
  let path;

  if (apiType == 'pro') {
    path = 'https://api.deepl.com/v2/translate?auth_key=' + authKey;
  } else if (apiType == 'free') {
    path = 'https://api-free.deepl.com/v2/translate?auth_key=' + authKey;
  } else {
    return TypeError(
      "Invalid api type. The API Type is expected to be 'free' or 'pro'."
    );
  }

  const params = new url.URLSearchParams({
    text,
    target_lang: targetLang,
  });

  return axios.post(path, params.toString());
};

export { fetchToDeepl };
