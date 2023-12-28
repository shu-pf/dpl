import { postTranslateAPI } from './fetch-to-deepl';
import { languageOptions } from '../const/languageOptions';
import { AxiosError } from 'axios';

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
  try {
    const result = await postTranslateAPI({
      text,
      targetLang,
      authKey,
      apiType,
    });

    const translatedText = result.data.translations[0].text;

    return translatedText;
  } catch (err: unknown) {
    const error = err as AxiosError;

    if (error.response?.status === 403) {
      console.error(
        `Failed to get translation results.
        API key or API type may be incorrect.
        `
      );
      return;
    } else if (error.response?.status === 429) {
      console.error('Too many requests. Please wait and resend your request.');
      return;
    } else if (error.response?.status === 456) {
      console.error('Quota exceeded. The character limit has been reached.');
      return;
    }

    throw error;
  }
};

export { translateText };
