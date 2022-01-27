const axios = require("axios");
const readline = require("readline");
const fs = require("fs");
const url = require("url");

async function fetchToDeepl(text, setting) {
  let path;

  if (setting.apiType == "pro") {
    path = "https://api.deepl.com/v2/translate?auth_key=" + setting.authKey;
  } else if (setting.apiType == "free") {
    path =
      "https://api-free.deepl.com/v2/translate?auth_key=" + setting.authKey;
  } else {
    console.log("Wrong parameters");
    process.exit(1);
  }

  const params = new url.URLSearchParams({
    text,
    target_lang: setting.targetLang,
  });

  const result = await axios.post(path, params.toString());
  const translatedText = result.data.translations[0].text;

  return translatedText;
}

module.exports = async () => {
  let setting;

  if (process.argv[2] == "init") {
    const setting = {
      apiType: process.argv[3],
      authKey: process.argv[4],
      targetLang: process.argv[5],
    };

    const settingJson = JSON.stringify(setting);

    fs.writeFileSync(__dirname + "/../setting.json", settingJson);
    process.exit(0);
  }

  try {
    setting = require("../setting.json");
  } catch {
    console.log("Can't find setting file.");
    console.log("Please run 'dpl init [api_type] [auth_key] [target_lang]'.");
    console.log("See Readme for details.");
    process.exit(0);
  }

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on("line", async (line) => {
    try {
      const translatedText = await fetchToDeepl(line, setting);

      console.log(translatedText);
    } catch (e) {
      console.log(e);
    } finally {
      reader.prompt();
    }
  });

  if (process.argv[2]) {
    try {
      const translatedText = await fetchToDeepl(process.argv[2], setting);

      console.log(translatedText);
    } catch (e) {
      console.log(e);
    }

    process.exit(0);
  } else {
    reader.prompt();
  }
};
