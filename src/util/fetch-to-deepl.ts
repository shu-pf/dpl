const axios = require('axios');
const url = require('url');

const fetchToDeepl = function (text, { apiType, authKey, targetLang }) {
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
