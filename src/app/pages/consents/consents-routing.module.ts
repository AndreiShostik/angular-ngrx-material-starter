import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentsComponent } from './consents.component';
import { ConsentsListComponent } from './consents-list/consents-list.component';
import { ConsentAddComponent } from './consent-add/consent-add.component';


const routes: Routes = [
  {
    path: '',
    component: ConsentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ConsentsListComponent,
        data: {
          title: 'Consents'
        }
      },
      {
        path: 'give-consent',
        component: ConsentAddComponent,
        data: {
          title: 'Give consent'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentsRoutingModule {}
