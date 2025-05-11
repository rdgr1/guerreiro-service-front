import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMinifyComponent } from './hero-minify.component';

describe('HeroMinifyComponent', () => {
  let component: HeroMinifyComponent;
  let fixture: ComponentFixture<HeroMinifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroMinifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroMinifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
