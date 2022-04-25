import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { counterState } from '../state/counter.state';
import { appState } from '../store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private _store: Store<appState>) { }

  ngOnInit(): void {
  }
  onIncrement(){
  this._store.dispatch(increment());
  }
  onDecrement(){
  this._store.dispatch(decrement());
  }
  onReset(){
  this._store.dispatch(reset());
  }

}
