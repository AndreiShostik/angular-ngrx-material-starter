import { Action } from '@ngrx/store';


export const USER_CONSENTS_KEY = 'USER_CONSENTS';

export enum UserConsentsActionTypes {
  CREATE = '[UserConsents] Create',
  SELECT_ALL = '[UserConsents] Select All'
}

export class ActionUserConsentsAdd implements Action {
  readonly type = UserConsentsActionTypes.CREATE;
  constructor(public payload: { userConsent: UserConsentsModel }) { }
}

export class ActionConsentsSelectAll implements Action {
  readonly type = UserConsentsActionTypes.SELECT_ALL;
  constructor(public payload: { userConsents: UserConsentsModel[] }) { }
}

export type UserConsentsActions =
  | ActionUserConsentsAdd
  | ActionConsentsSelectAll;

export const initialState: UserConsentsState = {
  items: [
    { name: 'First Secondovich', email: 'famous@malinator.com', consents: ['newsletter'] },
  ],
};

export const selectorUserConsents = state => state.consents.userConsents;

export function userConsentsReducer(state: UserConsentsState = initialState, action: UserConsentsActions): UserConsentsState {
  switch (action.type) {
    case UserConsentsActionTypes.CREATE:
      return {
        ...state,
        items: state.items.concat(action.payload.userConsent)
      };
    default:
      return state;
  }
}

export interface UserConsentsModel {
  name: string;
  email: string;
  consents: string[];
}

export interface UserConsentsState {
  items: UserConsentsModel[];
}
