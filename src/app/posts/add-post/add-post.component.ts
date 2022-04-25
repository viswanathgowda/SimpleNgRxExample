import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { post } from 'src/app/model/post.medel';
import { appState } from 'src/app/store/app.state';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
postForm! : FormGroup;
  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required, Validators.minLength(6),]),
      description : new FormControl(null, [Validators.required, Validators.minLength(10),])
    });


  }
  // showDescriptionErrors(){
  //   const descriptionForm = this.postForm.get('description');
  //   if(descriptionForm?.touched && !descriptionForm.valid){
  //     if(descriptionForm.errors?.['required']){
  //       return 'Description is required';
  //     }
  //     if(descriptionForm.errors?.['minlength']){
  //       return 'description has min 10 chart';
  //     }
  //   }
  // }
addform(){
  if(!this.postForm.valid){
    return ;
  }
  const post: post = {
    title: this.postForm.value.title,
    description: this.postForm.value.description
  }
  this.store.dispatch(addPost({post}));
}

}
