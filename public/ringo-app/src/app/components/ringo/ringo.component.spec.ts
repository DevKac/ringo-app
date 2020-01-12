import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingoComponent } from './ringo.component';

describe('RingoComponent', () => {
  let component: RingoComponent;
  let fixture: ComponentFixture<RingoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
