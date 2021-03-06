import {Component, OnInit} from '@angular/core';
import {StoreService} from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AdminPanel';
  secondTitle = 'MySecondTitle123'

  constructor(public store: StoreService) {}

  ngOnInit(): void {}
}
