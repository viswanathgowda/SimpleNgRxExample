import { postReducer } from "../posts/state/post.reducer";
import { postState } from "../posts/state/post.state";
import { counterReducer } from "../state/counter.reducer";
import { counterState } from "../state/counter.state";

export interface appState {
    counter : counterState;
    posts : postState;
}

export const appReducer = {
    counter: counterReducer,
    posts : postReducer
}