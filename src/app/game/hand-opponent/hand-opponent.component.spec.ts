import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandOpponentComponent } from './hand-opponent.component';

describe('HandOpponentComponent', () => {
  let component: HandOpponentComponent;
  let fixture: ComponentFixture<HandOpponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandOpponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandOpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
