import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowanceManageComponent } from './allowance-manage.component';

describe('AllowanceManageComponent', () => {
  let component: AllowanceManageComponent;
  let fixture: ComponentFixture<AllowanceManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllowanceManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowanceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
