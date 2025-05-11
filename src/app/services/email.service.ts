import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailPayload {
  name: string | null | undefined;
  email: string | null | undefined;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/email/enviar';

  constructor(private http: HttpClient) {}

  sendEmail(payload: EmailPayload): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}