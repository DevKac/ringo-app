import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingoContainerComponent } from './ringo-container.component';

describe('RingoContainerComponent', () => {
  let component: RingoContainerComponent;
  let fixture: ComponentFixture<RingoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
