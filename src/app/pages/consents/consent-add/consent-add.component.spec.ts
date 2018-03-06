import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { ConsentAddComponent } from './consent-add.component';

describe('ConsentAddComponent', () => {
  let component: ConsentAddComponent;
  let fixture: ComponentFixture<ConsentAddComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          RouterTestingModule,
          SharedModule,
          CoreModule
        ],
        declarations: [ConsentAddComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
