import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRegisterComponent } from './report-register.component';

describe('ReportRegisterComponent', () => {
  let component: ReportRegisterComponent;
  let fixture: ComponentFixture<ReportRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
