import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { post } from '../model/post.medel';
import { appState } from '../store/app.state';
import { deletePost } from './state/post.action';
import { getPost } from './state/post.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$!: Observable<post[]>;
  constructor(private _store: Store<appState>) { }

  ngOnInit(): void {
  this.posts$ = this._store.select(getPost);
  }

  onDeletePost(id:string){
    if(confirm('Are you sure to delete this post')){
      console.log('delete');
      this._store.dispatch(deletePost({ id}));
    }
  }

}
