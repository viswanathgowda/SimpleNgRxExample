import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { post } from 'src/app/model/post.medel';
import { appState } from 'src/app/store/app.state';
import { updatePost } from '../state/post.action';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post!: post;
  postform!: FormGroup;
  postSbuscription!: Subscription;
  constructor(private _activatedRoute: ActivatedRoute, private _store: Store<appState>, private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) =>{
      //console.log(params.get('id'));
      const id= params.get('id');
      this._store.select(getPostById , {id}).subscribe((data)=>{
        this.post = data;
        console.log(this.post);
        this.createform();
      })
    })
  }

  onSubmit(){
    if(!this.postform.valid){
      return;
    }
    const title = this.postform.value.title;
    const description = this.postform.value.description;

    const post : post = {
      id : this.post.id,
      title,
      description
    };

    this._store.dispatch(updatePost({post}));
    this._router.navigate(['posts']);
  }

  createform(){
    this.postform = new FormGroup({
      title : new FormControl (this.post.title, [Validators.required ,Validators.minLength(6) ]),
      description : new FormControl (this.post.description, [Validators.required, Validators.minLength(10)])

    });     
  }
ngOnDestroy(): void {
  if(this.postSbuscription){
    this.postSbuscription.unsubscribe
  }
}
}
