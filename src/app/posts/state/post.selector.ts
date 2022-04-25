import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsComponent } from "../posts.component";
import { postState } from "./post.state";

export const  POSTS_STATE_NAME = 'posts';

const getPostState = createFeatureSelector<postState>(POSTS_STATE_NAME);

export const getPost = createSelector(getPostState, (state)=>{
    return state.posts;
})

export const getPostById = createSelector(getPostState, (state: any, props: any)=>{
    //return state.posts[props.id ] ? state.posts[props.id] : null;
    return state.posts.find((post: { id: any; })=> post.id === props.id);
})