import { createAction, props } from "@ngrx/store";
import { post } from "src/app/model/post.medel";


//export const add_post_action = '[posts age] add post';
//export const update_post_action = '[posts age] update post';
//export const delete_post_action = '[posts age] delete post';

export const addPost = createAction('add_post_action', props<{post : post}>());
export const updatePost = createAction('update_post_action', props<{post : post}>());
export const deletePost = createAction('delete_post_action', props<{id: string}>());