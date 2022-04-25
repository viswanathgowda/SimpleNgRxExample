import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';
import { change_text, onadd } from '../state/counter.action';
import { getTitle } from '../state/counter.selector';
import { counterState } from '../state/counter.state';
import { appState } from '../store/app.state';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css']
})
export class CounterCustomInputComponent implements OnInit {
value! : number;

title$!: Observable<string>;
  constructor(private _store: Store<appState>) { }

  ngOnInit(): void {
    this.title$=this._store.select(getTitle);
    
  }
onadd(){
  this._store.dispatch(onadd({count: +this.value}));
}
changetext(){
  this._store.dispatch(change_text());
}
}
