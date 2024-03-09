import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
  @Input()
  visible = false;

  @Input()
  notFoundMessage = "Nothing Found";

  @Input()
  resetLinkText = "Reset";

  @Input()
  resetLinkRoute = "/";

  constructor() { }
  ngOnInit(): void {
  }

}
