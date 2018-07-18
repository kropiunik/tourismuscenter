import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UstComponent } from './ust.component';

describe('UstComponent', () => {
  let component: UstComponent;
  let fixture: ComponentFixture<UstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
