import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewProductByCategoryComponent } from './view-product-by-category.component';

describe('ViewProductByCategoryComponent', () => {
  let component: ViewProductByCategoryComponent;
  let fixture: ComponentFixture<ViewProductByCategoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
