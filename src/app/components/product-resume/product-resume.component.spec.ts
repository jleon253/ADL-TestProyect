import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductResumeComponent } from './product-resume.component';

describe('ProductResumeComponent', () => {
  let component: ProductResumeComponent;
  let fixture: ComponentFixture<ProductResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
