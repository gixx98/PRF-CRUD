import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  productsInCart: any;

  constructor(
    private cartService: CartService
  ) { }

  getProductsInCart = () => this.cartService.getAddedProducts().subscribe(res => this.productsInCart = res);

  ngOnInit(): void {
    this.getProductsInCart();
  }

}
