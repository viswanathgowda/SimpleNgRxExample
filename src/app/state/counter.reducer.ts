import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { change_text, decrement, increment, onadd, reset } from "./counter.action";
import { intialState } from "./counter.state";

export const _counterReducer = createReducer(
    intialState,
    on(increment, (state )=>{
        return{
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state)=>{
        return {
            ...state,
            counter : state.counter -1
        }
    }),
    on(reset, (state)=>{
        return {
            ...state,
            counter: 0
        }
    }),
    on(onadd, (state, action)=>{
        return{
            ...state,
            counter: state.counter + action.count
        }
    }),
    on(change_text, (state)=>{
        return{
            ...state,
            title: 'Angular developper'
        }
    })
    )

    export function counterReducer(state: any, action: any){
        return _counterReducer(state, action);
    }