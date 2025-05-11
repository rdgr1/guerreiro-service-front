import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-services',
  imports: [],
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.scss'
})
export class CardServicesComponent {
  @Input() textPrimary: string = '';
  @Input() textSecondary: string = '';
  @Input() img: string = '';
}
