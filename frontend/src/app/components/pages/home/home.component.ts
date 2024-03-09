import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { NgFor } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    StarRatingComponent,
    NgFor,
    CurrencyPipe,
    SearchComponent,
    TagsComponent,
    RouterLink,
    NotFoundComponent
  ],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        if (params.searchTerm)
          this.foods = this.foodService.getAllFoodsBySearchTerm(
            params.searchTerm
          );
        else if (params.tag)
          this.foods = this.foodService.getAllFoodsByTag(params.tag);
        else this.foods = this.foodService.getAll();
      },
    });
  }
  getAllFoodsByTag(tag: any): Food[] {
    throw new Error('Method not implemented.');
  }
}
