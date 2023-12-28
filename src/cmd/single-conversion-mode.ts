import { translateText } from '../api/translate-text';
import { setting } from '../config/setting';

/**
 * 単発変換モード
 */
const singleConversionMode = async () => {
  // 2番目以降の引数を合わせて一つの文字列にする
  const string = process.argv.slice(2).join(' ');

  /**
   * 翻訳処理
   */

  console.log('Translating...');

  const translatedText = await translateText({
    text: string,
    ...setting,
  });

  // 1行上にカーソルを移動して、その行をクリアする
  process.stdout.write('\x1b[1F\x1b[K');

  console.log(translatedText);

  /**
   * 終了処理
   */
  process.exit(0);
};

export { singleConversionMode };
