import { postTranslateAPI } from './fetch-to-deepl';
import { languageOptions } from '../const/languageOptions';
import { AxiosError } from 'axios';
import { showSpinner, stopSpinner } from '../utils/terminal';

interface Props {
  text: string;
  targetLang: keyof typeof languageOptions;
  authKey: string;
  apiType: 'free' | 'pro';
}

/**
 * テキストを翻訳する
 */
const translateText = async ({ text, apiType, authKey, targetLang }: Props) => {
  const spinner = showSpinner('Translating');

  try {
    const result = await postTranslateAPI({
      text,
      targetLang,
      authKey,
      apiType,
    });
    stopSpinner(spinner);

    const translatedText = result.data.translations[0].text;

    return translatedText;
  } catch (err: unknown) {
    stopSpinner(spinner);

    const error = err as AxiosError;

    if (error.response?.status === 403) {
      console.error(
        'Failed to get translation results.\n' +
          'API key or API type may be incorrect.\n' +
          'Try "dpl setting".'
      );
      process.exit(0);
    } else if (error.response?.status === 429) {
      console.error('Too many requests. Please wait and resend your request.');
      process.exit(0);
    } else if (error.response?.status === 456) {
      console.error('Quota exceeded. The character limit has been reached.');
      process.exit(0);
    }

    throw error;
  }
};

export { translateText };
