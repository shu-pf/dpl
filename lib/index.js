const translate = require("deepl");
const readline = require("readline");
const fs = require("fs");

module.exports = async () => {
  console.log("current dir:" + process.cwd());
  let setting;

  if (process.argv[2] == "init") {
    const setting = {
      authKey: process.argv[3],
      targetLang: process.argv[4],
    };

    const settingJson = JSON.stringify(setting);

    fs.writeFileSync(process.cwd() + "/setting.json", settingJson);
    process.exit(0);
  }

  try {
    setting = require("../setting.json");
  } catch {
    console.log("Can't find setting file.");
    console.log("Please run 'dpl init [auth_key] [target_lang]'.");
    process.exit(0);
  }

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on("line", async (line) => {
    try {
      const result = await translate({
        text: line,
        target_lang: setting.targetLang,
        auth_key: setting.authKey,
      });
      console.log(result.data.translations[0].text);
    } catch (e) {
      console.log(e);
    } finally {
      reader.prompt();
    }
  });

  // 参考: https://qiita.com/toshi-toma/items/ea76b8894e7771d47e10
  if (process.argv[2]) {
    try {
      const result = await translate({
        text: process.argv[2],
        target_lang: setting.targetLang,
        auth_key: setting.authKey,
      });
      console.log(result.data.translations[0].text);
    } catch (e) {
      console.log(e);
    }

    process.exit(0);
  } else {
    reader.prompt();
  }
};
