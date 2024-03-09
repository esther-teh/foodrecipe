import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { StarRatingComponent } from "../../partials/star-rating/star-rating.component";
import { NgFor, NgIf } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
    selector: 'app-food-page',
    standalone: true,
    templateUrl: './food-page.component.html',
    styleUrl: './food-page.component.css',
    imports: [StarRatingComponent, NgFor, NgIf, RouterLink, CurrencyPipe, NotFoundComponent]
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService, 
    private cartService:CartService, private router: Router ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.food = foodService.getFoodById(params.id);
    });
  }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}