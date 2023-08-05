import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSupplierComponent } from './header-supplier.component';

describe('HeaderSupplierComponent', () => {
  let component: HeaderSupplierComponent;
  let fixture: ComponentFixture<HeaderSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
