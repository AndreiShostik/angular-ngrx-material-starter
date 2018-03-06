import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BigInputComponent } from './big-input/big-input.component';
import { BigInputActionComponent } from './big-input/big-input-action.component';


const SHARED_MODULES = [
  // angular
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,

  FlexLayoutModule,

  // angular-material
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatTooltipModule,
];

const SHARED_SERVICES = [

];

const SHARED_PIPES = [

];

const SHARED_DIRECTIVES = [

];

const SHARED_COMPONENTS = [
  BigInputComponent,
  BigInputActionComponent,
];

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    ...SHARED_COMPONENTS,
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    ...SHARED_COMPONENTS,
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
      return <ModuleWithProviders>{
          ngModule: SharedModule,
          providers: [
              ...SHARED_SERVICES,
          ],
      };
  }
}
