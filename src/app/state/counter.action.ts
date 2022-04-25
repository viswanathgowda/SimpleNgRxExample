import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const onadd = createAction('onadd', props<{count: number}>());

export const change_text = createAction('changetext');