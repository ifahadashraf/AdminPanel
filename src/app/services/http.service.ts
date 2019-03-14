import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StoreService} from './store.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient,
    private store: StoreService
  ) { }

  addUser(param) {
    const body = param;
    return this.httpClient.post(this.store.BASE_URL + this.store.USERS, body, { headers: { 'Content-Type': 'application/json' } });
  }
}
