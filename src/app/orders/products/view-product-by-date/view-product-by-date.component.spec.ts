import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewProductByDateComponent } from './view-product-by-date.component';

describe('ViewProductByDateComponent', () => {
  let component: ViewProductByDateComponent;
  let fixture: ComponentFixture<ViewProductByDateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
