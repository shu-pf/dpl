import { translateText } from '../api/translate-text';
import readline from 'readline';
import { setting } from '../config/setting';
import chalk from 'chalk';

function showSpinner(text: string) {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  return setInterval(() => {
    process.stdout.clearLine(0); // 0は現在の行をクリアすることを指定
    process.stdout.cursorTo(0); // カーソルを行の先頭に移動
    process.stdout.write(chalk.green(`${frames[i]} ${text}`)); // スピナーフレームを表示
    i = (i + 1) % frames.length;
  }, 100);
}

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

      clearInterval(spinner); // スピナーを停止
      process.stdout.clearLine(0); // 0は現在の行をクリアすることを指定
      process.stdout.cursorTo(0); // カーソルを行の先頭に移動

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
