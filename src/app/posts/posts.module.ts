import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './state/post.reducer';
import { POSTS_STATE_NAME } from './state/post.selector';

const routes: Routes =[
  {path : '', component: PostsComponent,
  children : [{path : 'addpost', component: AddPostComponent},
  {path: 'edit/:id', component: EditPostComponent}],
}
]

@NgModule({
  declarations: [PostsComponent,
    AddPostComponent,
    EditPostComponent],
  imports: [
    CommonModule,ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature(POSTS_STATE_NAME, postReducer)
  ]
})
export class PostsModule { }
