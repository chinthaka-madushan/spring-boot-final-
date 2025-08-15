import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyManageComponent } from './family-manage.component';

describe('FamilyManageComponent', () => {
  let component: FamilyManageComponent;
  let fixture: ComponentFixture<FamilyManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
