import { interactiveMode } from './cmd/interactive-mode';
import { singleConversionMode } from './cmd/single-conversion-mode';
import { makeSettingFile } from './cmd/make-setting-file';
import { importSetting } from './config/setting';

const main = async () => {
  /**
   * version コマンドが指定された場合はバージョンを表示して終了
   */
  if (process.argv.length == 3 && process.argv[2] == 'version') {
    console.log('1.2.0');
    return;
  }
  /**
   * setting コマンドが指定された場合は設定ファイルを作成して終了
   */
  if (process.argv.length == 3 && process.argv[2] == 'setting') {
    await makeSettingFile();
    return;
  }

  /**
   * メイン処理
   */
  importSetting();

  if (process.argv.length == 2) {
    interactiveMode();
  } else {
    await singleConversionMode();
  }
};

main();
