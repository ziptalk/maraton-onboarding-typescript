import '@tok/ui/styles/global.scss';

import { DefinePresetsPlugin } from '@tok/generation/plugins/definePresets';
import { FormStatePlugin } from '@tok/generation/plugins/formState';
import { ThemePlugin } from '@tok/generation/plugins/theme';
import { TokI18nPlugin } from '@tok/i18n';
import { useTelegramSdk } from '@tok/telegram-ui/use/sdk';
import { AlertsPlugin } from '@tok/ui/plugins/alerts';
import { CurrencyPlugin } from '@tok/ui/plugins/currency';
import { createApp, defineComponent } from 'vue';
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';

import { BootstrapConfig } from './defineConfig';

type _App = Parameters<typeof createApp>[0];

export function bootstrap<T extends BootstrapConfig<any>>(
  App: _App,
  config: T
) {
  const { fallback, ...asyncLocales } = config.locale || {};
  const tg = useTelegramSdk();

  const i18nOptions = {
    default: fallback || 'en',
    asyncLocales,
  };

  const pages = config.pages.map((config, index) => {
    return {
      path: index === 0 ? '/' : config.path || `/${index}`,
      component: () => import('@tok/generation/presets/Route.vue'),
      meta: {
        config,
      },
    };
  });

  const exitRoute: RouteRecordRaw = {
    path: '/exit',
    component: defineComponent({
      template: '<div></div>',
      beforeRouteEnter(to, from, next) {
        if (tg) {
          console.log('Running inside Telegram Mini App - closing');
          tg.close();
        } else {
          console.log('Not running inside Telegram Mini App - cannot close');
          next(false); // Cancel navigation if not in Telegram Mini App
        }
      },
    }),
  };

  // TG doesn't support opening links in TMA yet
  /* const nextonRoute: RouteRecordRaw = {
    path: '/nexton',
    component: defineComponent({
      template: '<div></div>',
      beforeRouteEnter(to, from, next) {
        if (tg) {
          tg.openTelegramLink('https://hack-a-ton-frontend-iota.vercel.app/');
        } else {
          console.log('Not running inside Telegram Mini App - cannot redirect');
          next(false); // Cancel navigation if not in Telegram Mini App
        }
      },
    }),
  }; */

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL || '/'),
    routes: ([] as RouteRecordRaw[]).concat(pages).concat(exitRoute).concat({
      path: '/not-found',
      alias: '/:catchAll(.*)*',
      redirect: '/',
    }),
  });

  router.afterEach((to: RouteLocationNormalized) => {
    if (to.params.savedPosition) {
      return;
    }

    window.scrollTo({ top: 0 });
  });

  router.onError((error, to) => {
    const dynamicallyImportsError =
      error.message.includes('Failed to fetch dynamically imported module') ||
      error.message.includes('Importing a module script failed');

    if (error.name === 'ChunkLoadError' || dynamicallyImportsError) {
      location.href = to.fullPath;
    }
  });

  return createApp(App)
    .use(router)
    .use(AlertsPlugin)
    .use(TokI18nPlugin, i18nOptions)
    .use(ThemePlugin, config.theme || 'auto')
    .use(FormStatePlugin)
    .use(DefinePresetsPlugin, config.definePresets || {})
    .use(CurrencyPlugin, config.currencyConfig || {})
    .mount('#app');
}
