import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
  imports: [
    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    // app
    PagesRoutingModule,
  ],
  declarations: [PagesComponent],
  providers: [],
})
export class PagesModule {}
