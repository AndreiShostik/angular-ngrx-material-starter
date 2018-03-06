import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { ConsentsListComponent } from './consents-list.component';

describe('ConsentsListComponent', () => {
  let component: ConsentsListComponent;
  let fixture: ComponentFixture<ConsentsListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          RouterTestingModule,
          SharedModule,
          CoreModule
        ],
        declarations: [ConsentsListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
