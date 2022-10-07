import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../model/post';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-posts',
  template: `
    <h1>Nested Call example</h1>

    <button routerLink="/posts/1">Post #1</button>
    <button routerLink="/posts/2">Post #2</button>
    <button routerLink="/posts/3">Post #3</button>
    
    <ng-container *ngIf="data$ | async as data">
      <h1>Post title: {{data.post.title}}</h1>
      <h3>Commenti:</h3>
      <li *ngFor="let c of data.comments">{{c.name}}</li>
    </ng-container>

  `,
})
export class PostsComponent  {
  data$ = this.activatedRoute.params
    .pipe(
      map(params => params['id']),
      mergeMap(id => this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)),
      mergeMap(
        post => this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments/?postId=' + post.userId)
          .pipe(
            map(comments => ({ post, comments }))
          )
      )
    )

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}
}
