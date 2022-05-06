import { ProductService } from './../../services/product.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { IProduct } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // products = [
  //   {name: 'Mac 2021 26\'', price: 550000},
  //   {name: 'Mac 2021 26\'', price: 550000},
  //   {name: 'Mac 2021 26\'', price: 550000},
  //   {name: 'Mac 2021 26\'', price: 550000},
  //   {name: 'Mac 2021 26\'', price: 550000},
  //   {name: 'Macbook Pro', price: 865000}
  // ]

  products:any;

  getProducts = () => this.productService.getProducts().subscribe(res => this.products = res);

  productAddForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  })

  constructor(
    public authService: AuthServiceService,
    private productService: ProductService,
    public snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.getProducts();
  }

  addProduct(){
    var product = {
      name: this.productAddForm.value.name,
      price: this.productAddForm.value.price
    }

    this.productService.createProduct(product);
    this.snackBar.open('Termék hozzáadva', 'Bezár', {
      duration: 3000
    });

    this.productAddForm.reset();
  }

}
