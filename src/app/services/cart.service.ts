import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthServiceService
  ) { }

  addToCart(product:any){
      return new Promise<any>((resolve, reject) => {
        this.firestore.collection("users").doc(this.authService.getUserUID()).collection("cart").add(product).then(res => {}, err => reject(err));
      })
  }

  getAddedProducts(){
    this.authService.getUserUID();
    return this.firestore.collection("users").doc(this.authService.getUserUID()).collection("cart").snapshotChanges();
  }
}
