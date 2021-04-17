import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockContainerComponent } from './digital-clock-container.component';

describe('DigitalClockContainerComponent', () => {
  let component: DigitalClockContainerComponent;
  let fixture: ComponentFixture<DigitalClockContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalClockContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
