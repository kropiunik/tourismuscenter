import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickenComponent } from './kicken.component';

describe('KickenComponent', () => {
  let component: KickenComponent;
  let fixture: ComponentFixture<KickenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
