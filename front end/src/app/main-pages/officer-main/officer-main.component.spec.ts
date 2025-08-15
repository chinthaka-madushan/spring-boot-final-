import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerMainComponent } from './officer-main.component';

describe('OfficerMainComponent', () => {
  let component: OfficerMainComponent;
  let fixture: ComponentFixture<OfficerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficerMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
