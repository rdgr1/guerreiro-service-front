import { Component } from '@angular/core';
import { InputWrapperComponent } from '../input-wrapper/input-wrapper.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  NonNullableFormBuilder,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonSecondComponent } from '../button-second/button-second.component';
import { EmailService } from '../../services/email.service';
import { InputMessageComponent } from '../input-message/input-message.component';

/**
 * Tipagem forte dos dados que serão enviados por e‑mail.
 * Todos os campos são estritamente `string`, evitando o erro TS2322.
 */
interface EmailFormData {
  name: string;
  email: string;
  number: string;
  message: string;
}

@Component({
  selector: 'app-form-price',
  standalone: true,
  imports: [
    InputWrapperComponent,
    InputMessageComponent,
    ButtonSecondComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './form-price.component.html',
  styleUrls: ['./form-price.component.scss'],
})
export class FormPriceComponent {
  /**
   * Usamos `NonNullableFormBuilder` para garantir que todos os controles
   * retornem sempre `string` (nunca `null` ou `undefined`).
   */
  contatoForm: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    number: FormControl<string>;
    message: FormControl<string>;
  }>;

  constructor(private emailService: EmailService, private fb: NonNullableFormBuilder) {
    this.contatoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contatoForm.valid) {
      // `getRawValue()` agora é garantidamente `EmailFormData`
      const { name, email, number, message } = this.contatoForm.getRawValue();

      const payload: EmailFormData & { subject: string } = {
        name,
        email,
        number,
        message,
        subject: 'Contato via formulário de orçamento',
      };

      this.emailService.sendEmail(payload).subscribe({
        next: () => {
          alert('✅ E‑mail enviado com sucesso!');
          this.contatoForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('❌ Erro ao enviar o e‑mail.');
        },
      });
    } else {
      this.contatoForm.markAllAsTouched();
    }
  }
}
