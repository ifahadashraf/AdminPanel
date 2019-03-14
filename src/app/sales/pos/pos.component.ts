import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {

  totalBill = 0.00;
  balance = 0.00;
  paid = 0.00;
  //
  keyword = 'name';
  saleItems = [
    {id: 1, name: 'Lays', price: 20.00, quantity: 0},
    {id: 2, name: 'Wavy', price: 30.00, quantity: 0},
    {id: 3, name: 'Oye Hoye', price: 20.00, quantity: 0},
    {id: 4, name: 'Kukure', price: 30.00, quantity: 0},
    {id: 5, name: 'Slanty', price: 20.00, quantity: 0},
    {id: 6, name: 'Super Crisp', price: 30.00, quantity: 0}
  ];

  cartItems = [];

  constructor() { }

  ngOnInit() {
  }

  onSaleItemSelected(event) {
    this.cartItems.push({...event});
  }

  removeCartItem(item) {
    for (let i = 0; i < this.cartItems.length; i++ ) {
      if (this.cartItems[i].id === item.id) {
        this.totalBill = this.totalBill - item.price;
        this.cartItems.splice(i, 1);
      }
    }
  }

  getTotalBill() {
    this.totalBill = 0;
    for (let i = 0; i < this.cartItems.length; i++ ) {
      this.totalBill = this.totalBill + (this.cartItems[i].price * this.cartItems[i].quantity);
    }
    return this.totalBill;
  }
}
