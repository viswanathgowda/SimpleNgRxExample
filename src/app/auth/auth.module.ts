import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes= [
  { path: '', children: [
    {path: '', redirectTo: 'login'},
    {path: 'login', component: LoginComponent}
  ]}
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature('AUTH_STATE_NAME', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
