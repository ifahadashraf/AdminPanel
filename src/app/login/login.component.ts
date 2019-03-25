import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StoreService} from '../services/store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private store: StoreService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.store.isLoggedIn())
      this.router.navigateByUrl('/Dashboard');
  }

  onFormSubmit() {
    console.log(this.loginForm.controls);
    this.store.setLoggedIn('true');
    this.router.navigateByUrl('/Dashboard');
  }
}
