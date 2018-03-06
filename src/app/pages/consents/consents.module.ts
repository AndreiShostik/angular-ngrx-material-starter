import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { SharedModule } from '@app/shared';

import { ConsentsRoutingModule } from './consents-routing.module';
import { ConsentsComponent } from './consents.component';
import { ConsentsListComponent } from './consents-list/consents-list.component';
import { ConsentAddComponent } from './consent-add/consent-add.component';
import { userConsentsReducer } from './user-consents.reducer';
import { UserConsentsEffects } from './user-consents.effects';


@NgModule({
  imports: [
    SharedModule,
    ConsentsRoutingModule,
    StoreModule.forFeature('consents', {
      userConsents: userConsentsReducer,
    }),
    EffectsModule.forFeature([UserConsentsEffects])
  ],
  declarations: [
    ConsentsComponent,
    ConsentsListComponent,
    ConsentAddComponent,
  ],
  providers: []
})
export class ConsentsModule {
  constructor() {}
}
