const translate = require("deepl");
const readline = require("readline");
const setting = require("./setting.json");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  translate({
    text: line,
    target_lang: setting.targetLang,
    auth_key: setting.authKey,
  })
    .then((result) => {
      console.log(result.data.translations[0].text);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      reader.prompt();
    });
});

// 参考: https://qiita.com/toshi-toma/items/ea76b8894e7771d47e10
if (process.argv[2]) {
  translate({
    text: process.argv[2],
    target_lang: setting.targetLang,
    auth_key: setting.authKey,
  })
    .then((result) => {
      console.log(result.data.translations[0].text);
    })
    .catch((error) => {
      console.error(error);
    });
} else {
  reader.prompt();
}
