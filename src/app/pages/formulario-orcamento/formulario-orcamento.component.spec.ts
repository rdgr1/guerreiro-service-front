import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOrcamentoComponent } from './formulario-orcamento.component';

describe('FormularioOrcamentoComponent', () => {
  let component: FormularioOrcamentoComponent;
  let fixture: ComponentFixture<FormularioOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioOrcamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
