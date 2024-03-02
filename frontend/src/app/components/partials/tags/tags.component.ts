import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/Tag';

@Component({
  selector: 'app-tags',
  standalone: true,
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(foodService:FoodService) {
    foodService.getAllTags().subscribe((serverTags: Tag[] | undefined) => {
      this.tags = serverTags;
    });
   }

  ngOnInit(): void {
  }

}