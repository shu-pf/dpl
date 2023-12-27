import { fetchToDeepl } from './fetch-to-deepl';

const translateText = async (
  text: string,
  {
    apiType,
    authKey,
    targetLang,
  }: { apiType: string; authKey: string | undefined; targetLang: string }
) => {
  try {
    const result = await fetchToDeepl(text, {
      apiType,
      authKey,
      targetLang,
    });
    const translatedText = result.data.translations[0].text;

    return translatedText;
  } catch (err: unknown) {
    // @ts-ignore
    if (err.response) {
      // @ts-ignore
      switch (err.response.status) {
        case 403:
          console.log(
            'Request Error: Authorization failed. Please supply a valid auth_key parameter.\n'
          );
          console.log(
            'It seems that this error also occurs when the API Type is different.\nIs the API Type correct?'
          );
          process.exit(1);
        case 429:
          console.log(
            'Request Error: Too many requests. Please wait and resend your request.'
          );
          process.exit(1);
        case 456:
          console.log(
            'Request Error: Quota exceeded. The character limit has been reached.'
          );
          process.exit(1);
        default:
          throw err;
      }
    } else {
      throw err;
    }
  }
};

export { translateText };
