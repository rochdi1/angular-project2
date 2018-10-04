import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallapihttpComponent } from './callapihttp.component';

describe('CallapihttpComponent', () => {
  let component: CallapihttpComponent;
  let fixture: ComponentFixture<CallapihttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallapihttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallapihttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
