const util = require("util");
const { writeFile } = require("fs/promises");
const readline = require("readline");

exports.makeSettingFile = async () => {
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = util.promisify(reader.question).bind(reader);

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
      await writeFile(__dirname + "/../../setting.json", settingJson);
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
};
