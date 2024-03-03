import { NgModule } from '@angular/core';
import { StarRatingComponent } from './components/partials/star-rating/star-rating.component';
import { SearchComponent } from './components/partials/search/search.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [ ],
  imports: [HomeComponent,
            StarRatingComponent, 
            SearchComponent, 
            TagsComponent, 
            CommonModule],
})
export class AppModule {}
