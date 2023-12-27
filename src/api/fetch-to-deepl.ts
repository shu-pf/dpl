import axios from 'axios';

interface Request {
  text: string;
  target_lang: string;
}

interface Response {
  data: {
    translations: {
      detected_source_language: string;
      text: string;
    }[];
  };
}

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
    throw new Error(
      "Invalid api type. The API Type is expected to be 'free' or 'pro'."
    );
  }

  // FIXME: 1つ目のgenericsの型指定に何を入れるべきかわからない
  return axios.post<Request, Response, Request>(path, {
    text,
    target_lang: targetLang,
  });
};

export { fetchToDeepl };