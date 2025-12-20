import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Definiujemy wspierane języki
export const locales = ['en', 'pl'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale: locale, 
    messages: (await import(`../messages/${locale}.json`)).default
  };
});