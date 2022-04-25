

import { state } from "@angular/animations";
import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./post.action";
import { intialState2 } from "./post.state"

const _postReducer= createReducer(
    intialState2,
    on(addPost, (state, action)=>{
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post],
        }
    }),
    on(updatePost, (state, action) => {
        const updatePosts = state.posts.map((post)=>{
            return action.post.id === post.id ? action.post : post ;
        });

        return {
            ...state,
            posts: updatePosts
        }
        
    }),
    on(deletePost, (state, {id}) =>{
        const updatePosts = state.posts.filter(post =>{
            return post.id != id;
        })
     return {
        ...state,
        posts : updatePosts
     }
    })
    );

export function postReducer(state: any, action: any){
    return _postReducer(state, action);
}