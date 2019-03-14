import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {Route, RouterModule} from '@angular/router';
import { CreateComponent } from './user/create/create.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './user/view/view.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PosComponent } from './sales/pos/pos.component';
import { SalesViewComponent } from './sales/sales-view/sales-view.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

const routes: Route[] = [
  {path: '', component: MainComponent},
  {path: 'User/Create', component: CreateComponent},
  {path: 'User/UsersView', component: ViewComponent},
  {path: 'Sales/POS', component: PosComponent},
  {path: 'Sales/SalesView', component: SalesViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HeaderComponent,
    MainComponent,
    ViewComponent,
    PosComponent,
    SalesViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
