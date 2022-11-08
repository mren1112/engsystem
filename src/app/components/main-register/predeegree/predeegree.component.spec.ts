import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredeegreeComponent } from './predeegree.component';

describe('PredeegreeComponent', () => {
  let component: PredeegreeComponent;
  let fixture: ComponentFixture<PredeegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredeegreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredeegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
