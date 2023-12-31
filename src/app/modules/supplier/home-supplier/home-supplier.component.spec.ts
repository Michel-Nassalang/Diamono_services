import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupplierComponent } from './home-supplier.component';

describe('HomeSupplierComponent', () => {
  let component: HomeSupplierComponent;
  let fixture: ComponentFixture<HomeSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
