
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDataTableComponent } from './ngx-data-table.component';

describe('NgxDataTableComponent', () => {
  let component: NgxDataTableComponent;
  let fixture: ComponentFixture<NgxDataTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
