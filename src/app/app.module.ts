import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Route, RouterModule} from '@angular/router';
import { CreateComponent } from './user/create/create.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ViewComponent } from './user/view/view.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Route[] = [
  {path: '', component: MainComponent},
  {path: 'user/create', component: CreateComponent},
  {path: 'user/view', component: ViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HeaderComponent,
    MainComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
