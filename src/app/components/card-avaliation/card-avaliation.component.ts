import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-avaliation',
  imports: [CommonModule],
  templateUrl: './card-avaliation.component.html',
  styleUrl: './card-avaliation.component.scss'
})
export class CardAvaliationComponent {
@Input() name!: string;
@Input() depoiment!: string;
@Input() rating!: number;
@Input() img!: string;
get stars(): number[] {
  return Array(this.rating).fill(0)
}
}
