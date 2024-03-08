import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'search/:searchTerm', component: HomeComponent },
      { path: 'tag/:tag', component: HomeComponent },
      { path: 'food/:id', component: FoodPageComponent },
      { path: 'cart-page', component: CartPageComponent }
    ]),
    provideClientHydration(),
  ],
};
