const { fetchToDeepl } = require("./fetch-to-deepl");

exports.translateText = async (text, { apiType, authKey, targetLang }) => {
  try {
    const result = await fetchToDeepl(text, {
      apiType,
      authKey,
      targetLang,
    });
    const translatedText = result.data.translations[0].text;
    return translatedText;
  } catch (err) {
    if (err.response) {
      switch (err.response.status) {
        case 403:
          console.log(
            "Request Error: Authorization failed. Please supply a valid auth_key parameter."
          );
          process.exit(1);
        case 429:
          console.log(
            "Request Error: Too many requests. Please wait and resend your request."
          );
          process.exit(1);
        case 456:
          console.log(
            "Request Error: Quota exceeded. The character limit has been reached."
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
