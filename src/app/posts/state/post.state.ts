import { post } from "src/app/model/post.medel"

export interface postState {
    posts: post[];
}

export const intialState2 : postState = {
 posts: [
     {id:'1', title:'sample title1', description: 'sample description1'},
     {id:'2', title: 'sample title2', description : 'sample description2'}
 ],
}