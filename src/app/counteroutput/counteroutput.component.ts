import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { counterState } from '../state/counter.state';
import { appState } from '../store/app.state';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.css']
})
export class CounteroutputComponent implements OnInit {
counter$!: Observable<number>;
  constructor(private _store: Store<appState>) { }

  ngOnInit(): void {
    this.counter$ = this._store.select(getCounter);
  }

}
