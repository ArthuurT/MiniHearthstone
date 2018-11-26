import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandPlayerComponent } from './hand-player.component';

describe('HandPlayerComponent', () => {
  let component: HandPlayerComponent;
  let fixture: ComponentFixture<HandPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
