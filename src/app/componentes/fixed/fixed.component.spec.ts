import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedComponent } from './fixed.component';

describe('FixedComponent', () => {
  let component: FixedComponent;
  let fixture: ComponentFixture<FixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
