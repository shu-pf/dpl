const axios = require("axios");
const readline = require("readline");
const { writeFile } = require("fs/promises");
const url = require("url");
const util = require("util");

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
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = util.promisify(reader.question).bind(reader);

  if (process.argv[2] == "setting" && process.argv[3] == "init") {
    try {
      console.log(
        "Before setting up, you need to issue an API key for Deepl, and apply for API usage on the official Deepl website."
      );
      console.log(
        "If you have not yet issued an API key, you can do so from here. https://www.deepl.com/pro-api"
      );
      const apiType = await question(
        "What is the Type of the API Key?(pro or free): "
      );
      const authKey = await question("Please enter your auth key.: ");
      const targetLang = await question(
        "Select the language you want to translate into(EN or ZN or JA etc): "
      );

      let setting = {
        apiType,
        authKey,
        targetLang,
      };

      const settingJson = JSON.stringify(setting);
      try {
        await writeFile(__dirname + "/../setting.json", settingJson);
      } catch (e) {
        console.log("writeFile Error");
        console.log(e);
      }
    } catch {
      console.log("Interrupted. Please try again from the beginning.");
    } finally {
      console.log("The setting file has been generated.");
      process.exit(0);
    }
  }

  let setting;

  try {
    setting = require("../setting.json");
  } catch {
    console.log("Can't find setting file.");
    console.log("Please run 'dpl setting init'.");
    console.log("See Readme for details.");
    process.exit(0);
  }

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
