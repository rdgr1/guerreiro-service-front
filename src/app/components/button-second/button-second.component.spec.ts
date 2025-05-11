import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSecondComponent } from './button-second.component';

describe('ButtonSecondComponent', () => {
  let component: ButtonSecondComponent;
  let fixture: ComponentFixture<ButtonSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
