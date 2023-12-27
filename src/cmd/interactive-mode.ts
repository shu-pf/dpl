import { translateText } from '../api/translate-text';
import readline from 'readline';

const interactiveMode = async (setting: any) => {
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on('line', async (line: any) => {
    const translatedText = await translateText(line, setting);

    console.log(translatedText);
    reader.prompt();
  });

  reader.prompt();
};

export { interactiveMode };
