import { Component, OnInit } from '@angular/core';
import {StoreService} from '../services/store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.store.setLoggedIn('false');
    this.router.navigateByUrl('/');
    return false;
  }
}
