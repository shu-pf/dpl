import chalk from 'chalk';

const showSpinner = (text: string) => {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  return setInterval(() => {
    process.stdout.clearLine(0); // 0は現在の行をクリアすることを指定
    process.stdout.cursorTo(0); // カーソルを行の先頭に移動
    process.stdout.write(chalk.green(`${frames[i]} ${text}`)); // スピナーフレームを表示
    i = (i + 1) % frames.length;
  }, 100);
};

const stopSpinner = (spinner: NodeJS.Timeout) => {
  clearInterval(spinner);
  process.stdout.clearLine(0); // 0は現在の行をクリアすることを指定
  process.stdout.cursorTo(0); // カーソルを行の先頭に移動
};

export { showSpinner, stopSpinner };
