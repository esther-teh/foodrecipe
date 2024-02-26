import { NgModule } from '@angular/core';
import { StarRatingComponent } from './components/partials/star-rating/star-rating.component';
import { SearchComponent } from './components/partials/search/search.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
    declarations: [
      
    ],
    imports: [
      HomeComponent,
      StarRatingComponent,
      SearchComponent,
    ]
})
export class AppModule { }