import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = 'text' | 'email' | 'number'
@Component({
  selector: 'app-input-wrapper',
  imports: [ReactiveFormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputWrapperComponent),
    multi: true,
}],
  templateUrl: './input-wrapper.component.html',
  styleUrl: './input-wrapper.component.scss'
})
export class InputWrapperComponent implements ControlValueAccessor{
  @Input() type: InputTypes = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() inputName: string = '';
  @Input() autocomplete: string = '';
  @Input() formControl: FormControl = new FormControl();
    value: string = ''
    onChange: any = () => {}
    onTouched: any= () => {}
    onInput (event: Event){
      const value = (event.target as HTMLInputElement).value
      this.onChange(value)
    }
    writeValue(value: any): void {
        this.value = value
    }
    registerOnChange(fn: any): void {
        this.onChange = fn
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn
    }
    setDisabledState(isDisabled: boolean): void {}
    get inputId(): string {
  return this.label?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') + '-input';
}
}
