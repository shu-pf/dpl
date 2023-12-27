import { translateText } from '../api/translate-text';
import readline from 'readline';
import { setting } from '../config/setting';

const interactiveMode = async () => {
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on('line', async (line: string) => {
    const translatedText = await translateText(line, setting);

    console.log(translatedText);
    reader.prompt();
  });

  reader.prompt();
};

export { interactiveMode };
