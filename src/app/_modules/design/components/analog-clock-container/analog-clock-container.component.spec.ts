import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogClockContainerComponent } from './analog-clock-container.component';

describe('AnalogClockContainerComponent', () => {
  let component: AnalogClockContainerComponent;
  let fixture: ComponentFixture<AnalogClockContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogClockContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogClockContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
