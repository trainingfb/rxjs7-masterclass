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
import { PostsComponent } from './features/posts.component';
import { TodosComponent } from './features/todos.component';
import { TimerComponent } from './features/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    CrudComponent,
    NavbarComponent,
    HomeComponent,
    TodosComponent,
    TimerComponent,
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
      { path: 'timer', component: TimerComponent },
      { path: 'todos', component: TodosComponent},
      { path: 'todos/:id', component: TodosComponent},
      { path: 'posts', component: PostsComponent},
      { path: 'posts/:id', component: PostsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
