import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './components/pages/home/home.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'search/:searchTerm', component: HomeComponent },
      { path: 'tag/:tag', component: HomeComponent }
    ]),
    provideClientHydration(),
  ],
};
