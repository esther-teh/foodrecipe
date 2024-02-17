import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute: ActivatedRoute) { 
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {
  }
}

