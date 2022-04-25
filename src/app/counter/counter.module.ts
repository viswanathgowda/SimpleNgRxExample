import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { CounterCustomInputComponent } from '../counter-custom-input/counter-custom-input.component';
import { CounteroutputComponent } from '../counteroutput/counteroutput.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../state/counter.reducer';
import { COUNTER_STATE_NAME } from '../state/counter.selector';

const  routes: Routes = [
  {path: '', component: CounterComponent},
]


@NgModule({
  declarations: [
    CounterComponent,
    CounteroutputComponent,
    CounterCustomInputComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes), StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
  ]
})
export class CounterModule { }
