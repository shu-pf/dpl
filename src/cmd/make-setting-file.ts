import inquirer from 'inquirer';
import { languageOptions } from '../const/languageOptions';
import { writeFileWithDirectoryCreation } from '../utils/file';
import { settingFilePath } from '../const/settingFilePath';

/**
 * 設定ファイルを作成する
 */
const makeSettingFile = async () => {
  console.log(
    'Before setting up, you need to create an API key for DeepL.\n' +
      'If you have not yet created an API key, you can create from here.\n' +
      'https://www.deepl.com/pro-api\n'
  );

  const setting = await inquirer.prompt([
    {
      name: 'apiType',
      type: 'list',
      message: 'What is the Type of the API Key?:',
      choices: ['free', 'pro'],
      default: 'free',
    },
    {
      name: 'authKey',
      message: 'Please enter your auth key:',
    },
    {
      name: 'targetLang',
      type: 'list',
      message: 'Select the language you want to translate into:',
      filter: (answer: keyof typeof languageOptions) => {
        return languageOptions[answer];
      },
      choices: Object.keys(languageOptions),
      default: 'Japanese',
    },
  ]);

  const settingJson = JSON.stringify(setting);

  writeFileWithDirectoryCreation(settingFilePath, settingJson);

  /**
   * 終了処理
   */
  console.log('Setup completed.');
  process.exit(0);
};

export { makeSettingFile };
