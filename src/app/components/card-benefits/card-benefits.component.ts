import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-benefits',
  imports: [],
  templateUrl: './card-benefits.component.html',
  styleUrl: './card-benefits.component.scss'
})
export class CardBenefitsComponent {
@Input() img!: string;
@Input() textPrimary!: string;
@Input() textSecondary!: string;
}
