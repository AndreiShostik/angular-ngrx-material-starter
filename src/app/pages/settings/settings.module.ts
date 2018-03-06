import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { settingsReducer } from './settings.reducer';
import { SettingsEffects } from './settings.effects';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SettingsRoutingModule,
    StoreModule.forFeature('settings', settingsReducer),
    EffectsModule.forFeature([SettingsEffects])
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule {}
