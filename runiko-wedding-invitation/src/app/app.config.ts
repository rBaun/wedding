import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTransloco } from '@jsverse/transloco';
import { routes } from './routes/app.routes';
import { loadingInterceptor } from './services/loading.service';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        loadingInterceptor,
      ])
    ),
    provideTransloco({
        config: { 
          availableLangs: ['da-DK'],
          defaultLang: 'da-DK',
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
    })
  ],
};
