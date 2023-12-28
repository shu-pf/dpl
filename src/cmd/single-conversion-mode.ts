import { translateText } from '../api/translate-text';
import { setting } from '../config/setting';
import { showSpinner, stopSpinner } from '../utils/terminal';

/**
 * 単発変換モード
 */
const singleConversionMode = async () => {
  // 2番目以降の引数を合わせて一つの文字列にする
  const string = process.argv.slice(2).join(' ');

  /**
   * 翻訳処理
   */

  const spinner = showSpinner('Translating');

  const translatedText = await translateText({
    text: string,
    ...setting,
  });

  stopSpinner(spinner);

  console.log(translatedText);

  /**
   * 終了処理
   */
  process.exit(0);
};

export { singleConversionMode };
