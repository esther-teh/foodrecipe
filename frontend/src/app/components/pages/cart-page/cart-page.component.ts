import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cart } from 'src/app/shared/models/Cart'
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, Title],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
    }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(CartItem.food.id, quantity);
  }

}