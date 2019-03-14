import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public BASE_URL = 'https://localhost:44398/api/';
  public USERS = 'users';

  constructor() { }
}
