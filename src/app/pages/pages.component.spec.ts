import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          RouterTestingModule,
          SharedModule,
          CoreModule
        ],
        declarations: [PagesComponent]
      }).compileComponents();
    })
  );

  it('should create component', async(() => {
    const fixture = TestBed.createComponent(PagesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
