import { IProduct } from './../../models/product.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  createProduct(input:any){
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('products').add(input).then(res => {}, err => reject(err));
    })
  }

  getProducts(){
    return this.firestore.collection("products").snapshotChanges();
  }
}
