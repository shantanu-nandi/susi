import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraetePostComponent } from './craete-post.component';

describe('CraetePostComponent', () => {
  let component: CraetePostComponent;
  let fixture: ComponentFixture<CraetePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraetePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraetePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
