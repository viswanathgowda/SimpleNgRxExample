import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { loginStart, loginSuccess } from "./auth.action";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private _authserver: AuthService){}
    
    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginStart),exhaustMap((action) =>{
            return this._authserver.login(action.email, action.password).pipe(map((data) => {
                    return loginSuccess();
                }))
        }))
    })
}