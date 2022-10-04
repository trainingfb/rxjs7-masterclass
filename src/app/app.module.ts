import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './features/page1.component';
import { Page2Component } from './features/page2.component';
import { NavbarComponent } from './core/components/navbar.component';
import { CrudComponent } from './features/crud.component';
import { HomeComponent } from './features/home.component';
import { TodosComponent } from './features/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    CrudComponent,
    NavbarComponent,
    HomeComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'crud', component: CrudComponent },
      { path: 'home', component: HomeComponent },
      { path: 'todos', component: TodosComponent},
      { path: 'todos/:id', component: TodosComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
