import { Component } from '@angular/core';
import { CardBenefitsComponent } from "../../components/card-benefits/card-benefits.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beneficios',
  imports: [CardBenefitsComponent,CommonModule],
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.scss'
})
export class BeneficiosComponent {
  beneficios = [
    {
      img: 'assets/imgs/svg/cards-beneficios/Protect.svg',
      textPrimary: 'Segurança',
      textSecondary: 'Garantida'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/Graph.svg',
      textPrimary: 'Eficiência',
      textSecondary: 'Operacional'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/Services.svg',
      textPrimary: 'Personalização',
      textSecondary: 'De Serviços'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/Handshake.svg',
      textPrimary: 'Resultados',
      textSecondary: 'Consistentes'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/Circular Arrows.svg',
      textPrimary: 'Melhoria',
      textSecondary: 'Contínua'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/Brain.svg',
      textPrimary: 'Profissionais',
      textSecondary: 'Capacitados'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/Wrench.svg',
      textPrimary: 'Soluções',
      textSecondary: 'Eficientes'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/Quality.svg',
      textPrimary: 'Padrão de',
      textSecondary: 'Qualidade'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/Light.svg',
      textPrimary: 'Foco em Core',
      textSecondary: 'Business'
    }
  ];

  get primeiraLinha() {
    return this.beneficios.slice(0, 4);
  }

  get segundaLinha() {
    return this.beneficios.slice(4);
  }
}
