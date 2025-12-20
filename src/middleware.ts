import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n';

export default createMiddleware({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  // Opcjonalnie: wymuś prefiks języka zawsze (np. /pl/about)
  localePrefix: 'always' 
});
export const config = {
  // Wykluczamy ścieżki api, _next oraz pliki statyczne
  matcher: ['/', '/(pl|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};