import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n'

import en from './locales/en.json';
import enUS from './locales/en-US.json';
import enGB from './locales/en-GB.json';

export default function localeSetup(locale = getLocaleFromNavigator()) {
  addMessages('en', en);
  addMessages('en-US', enUS);
  addMessages('en-GB', enGB);
  init({
    fallbackLocale: 'en',
    initialLocale: locale,
  })
}
