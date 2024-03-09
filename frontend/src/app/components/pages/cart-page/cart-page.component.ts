import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from 'src/app/shared/models/Cart'
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/shared/models/CartItem';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { TitleComponent } from '../../partials/title/title.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, NgFor, NgIf, TitleComponent, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
  this.cartService.getCartObservable().subscribe((cart
      ) => {
      this.cart = cart;
      })
    }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

changeQuantity(cartItem:CartItem, quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
