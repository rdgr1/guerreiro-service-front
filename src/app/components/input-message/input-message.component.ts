import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMessageComponent),
      multi: true,
    },
  ],
  template: `
    <div class="input-wrapper">
      <label [for]="inputName">{{ label }}</label>
      <textarea
        [id]="inputName"
        [placeholder]="placeholder"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onTouched()"
        [attr.autocomplete]="autocomplete"
        [disabled]="disabled"
      ></textarea>
    </div>
  `,
  styleUrls: ['./input-message.component.scss'],
})
export class InputMessageComponent implements ControlValueAccessor {
  /** Placeholder mostrado no textarea */
  @Input() placeholder = '';
  /** Texto do rótulo */
  @Input() label = '';
  /** Atributo id/for do campo */
  @Input() inputName = '';
  /** Autocomplete padrão HTML */
  @Input() autocomplete = '';

  /** Valor interno */
  value = '';
  /** Estado de desabilitado */
  disabled = false;

  /** Funções de callback registradas pelo Angular Forms */
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  /* ------------------ ControlValueAccessor ------------------ */
  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /* ------------------ Eventos ------------------ */
  onInput(event: Event): void {
    const newValue = (event.target as HTMLTextAreaElement).value;
    this.value = newValue;
    this.onChange(newValue);
  }
  get inputId(): string {
  return this.label?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') + '-message';
}
}