import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KassabuchComponent } from './kassabuch.component';

describe('KassabuchComponent', () => {
  let component: KassabuchComponent;
  let fixture: ComponentFixture<KassabuchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KassabuchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KassabuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
