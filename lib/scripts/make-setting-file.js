const util = require("util");
const cliSelect = require("cli-select");
const readline = require("readline");

exports.makeSettingFile = async () => {
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const question = util.promisify(reader.question).bind(reader);

  console.log(
    "Before setting up, you need to issue an API key for Deepl, and apply for API usage on the official Deepl website."
  );
  console.log(
    "If you have not yet issued an API key, you can do so from here. https://www.deepl.com/pro-api\n"
  );

  let setting = {};

  try {
    console.log("What is the Type of the API Key?(pro or free): ");
    setting.apiType = await cliSelect({
      values: ["free", "pro"],
      defaultValue: 0,
    });
    console.log("set api type");
  } catch {
    console.log("cancelled");
  }

  try {
    setting.authKey = await question("Please enter your auth key: ");
  } catch {
    console.log("cancelled");
  }

  // try {
  //   console.log(
  //     "Select the language you want to translate into(EN or ZN or JA etc): "
  //   );
  //   setting.targetLang = await cliSelect({
  //     values: ["ZN", "JA"],
  //   });
  // } catch {
  //   console.log("cancelled");
  // }

  // let setting = {
  //   apiType,
  //   authKey,
  //   targetLang,
  // };

  // const settingJson = JSON.stringify(setting);
  // try {
  //   await writeFile(__dirname + "/../../setting.json", settingJson);
  // } catch (e) {
  //   console.log("writeFile Error");
  //   console.log(e);
  // }
  process.exit(0);
};
