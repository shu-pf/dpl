const { translateText } = require("../util/translate-text");
const readline = require("readline");

exports.interactiveMode = async (setting) => {
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on("line", async (line) => {
    const translatedText = await translateText(line, setting);

    console.log(translatedText);
    reader.prompt();
  });

  reader.prompt();
};
