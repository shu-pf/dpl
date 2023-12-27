import inquirer from 'inquirer';
import { languageOptions } from '../const/languageOptions';
import { writeFileWithDirectoryCreation } from '../utils/file';
import { settingFilePath } from '../const/settingFilePath';

const makeSettingFile = async () => {
  console.log(
    'Before setting up, you need to issue an API key for Deepl, and apply for API usage on the official Deepl website.'
  );
  console.log(
    'If you have not yet issued an API key, you can do so from here. https://www.deepl.com/pro-api\n'
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

  console.log('Setup completed.');

  process.exit(0);
};

export { makeSettingFile };
