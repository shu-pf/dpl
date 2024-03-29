import { translateText } from '../api/translate-text';
import readline from 'readline';
import { setting } from '../config/setting';
import chalk from 'chalk';

/**
 * 対話モード
 */
const interactiveMode = () => {
  const lines: string[] = [];
  console.log(
    chalk.green(
      'Press "t" to translate. (Press "tf" to translate without linefeed)'
    )
  );
  console.log('Press "q" to quit.');
  console.log('--------------------------');

  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.on('line', async (line: string) => {
    if (line === 't' || line === 'tf') {
      let text: string;

      if (line === 'tf') {
        // tf が指定された場合は改行を削除
        text = lines.join(' ');
      } else {
        text = lines.join('\n');
      }

      const translatedText = await translateText({
        text,
        ...setting,
      });

      console.log(translatedText);
      console.log('--------------------------');
      lines.length = 0;
      reader.prompt();
      return;
    }

    if (line === 'q') {
      reader.close();
      return;
    }

    process.stdout.write('> ');
    lines.push(line);
  });

  reader.prompt();
};

export { interactiveMode };
