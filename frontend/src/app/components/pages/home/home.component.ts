import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { NgFor } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { SearchComponent } from '../../partials/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarRatingComponent, NgFor, CurrencyPipe, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else
      this.foods = foodService.getAll();
    })
  
  }

  ngOnInit(): void {
  }
}

