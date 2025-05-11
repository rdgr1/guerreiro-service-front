import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAvaliationComponent } from './card-avaliation.component';

describe('CardAvaliationComponent', () => {
  let component: CardAvaliationComponent;
  let fixture: ComponentFixture<CardAvaliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAvaliationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAvaliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
