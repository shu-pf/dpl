import { translateText } from '../api/translate-text';
import readline from 'readline';
import { setting } from '../config/setting';
import chalk from 'chalk';
import { showSpinner, stopSpinner } from '../utils/terminal';

/**
 * 対話モード
 */
const interactiveMode = () => {
  const lines: string[] = [];
  console.log(chalk.green('Press "t" to translate.'));
  console.log('--------------------------');

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on('line', async (line: string) => {
    if (line === 't') {
      const spinner = showSpinner('Translating');

      const translatedText = await translateText({
        text: lines.join('\n'),
        ...setting,
      });

      stopSpinner(spinner);

      console.log(translatedText);
      console.log('--------------------------');
      lines.length = 0;
      reader.prompt();
      return;
    } else {
      process.stdout.write('> ');
      lines.push(line);
    }
  });

  reader.prompt();
};

export { interactiveMode };
