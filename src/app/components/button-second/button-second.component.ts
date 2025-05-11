import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-second',
  imports: [],
  templateUrl: './button-second.component.html',
  styleUrl: './button-second.component.scss'
})
export class ButtonSecondComponent {
@Input() text: string = '';
}
