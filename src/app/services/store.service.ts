import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public BASE_URL = 'https://localhost:44398/api/';
  public USERS = 'users';
  private readonly _products = new BehaviorSubject<Product[]>([]);

  readonly products$ = this._products.asObservable();

  constructor() {}

  get products(): Product[] {
    return this._products.getValue();
  }

  isLoggedIn() {
    return (localStorage.getItem('loggedin') === 'true');
  }

  setLoggedIn(status) {
    localStorage.setItem('loggedin', status);
  }
}
