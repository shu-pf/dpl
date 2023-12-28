import { translateText } from '../api/translate-text';
import readline from 'readline';
import { setting } from '../config/setting';
import chalk from 'chalk';

/**
 * 対話モード
 */
const interactiveMode = () => {
  const lines: string[] = [];
  console.log(chalk.green('Press "t" to translate.'));
  console.log('Press "q" to quit.');
  console.log('--------------------------');

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on('line', async (line: string) => {
    if (line === 't') {
      const translatedText = await translateText({
        text: lines.join('\n'),
        ...setting,
      });

      console.log(translatedText);
      console.log('--------------------------');
      lines.length = 0;
      reader.prompt();
      return;
    } else if (line === 'q') {
      reader.close();
      return;
    } else {
      process.stdout.write('> ');
      lines.push(line);
    }
  });

  reader.prompt();
};

export { interactiveMode };
