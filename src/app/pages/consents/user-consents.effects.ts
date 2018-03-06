import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';

import { LocalStorageService } from '@app/core';

import {
  ActionConsentsSelectAll,
  USER_CONSENTS_KEY,
  UserConsentsActionTypes
} from './user-consents.reducer';


@Injectable()
export class UserConsentsEffects {
  constructor(private actions$: Actions<Action>, private localStorageService: LocalStorageService) { }

  @Effect({ dispatch: false })
  public getAllUserConsents(): Observable<Action> {
    return this.actions$
      .ofType(UserConsentsActionTypes.SELECT_ALL)
      .pipe(
        tap((action: ActionConsentsSelectAll) =>
          this.localStorageService.setItem(USER_CONSENTS_KEY, action.payload.userConsents)
        )
      );
  }
}
