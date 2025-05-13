import { Component } from '@angular/core';
import { ButtonSecondComponent } from "../../components/button-second/button-second.component";
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player'
@Component({
  selector: 'app-inicio',
  imports: [ButtonSecondComponent,CommonModule,YouTubePlayerModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent{
  videoId = 'QPhT08d8wOk';
  playerVars = {
    modestbranding: 1, // Remove logo grande
    rel: 0,             // Sem vídeos relacionados de outros canais
    controls: 1,        // Mostra controles
    disablekb: 1,       // Desativa controles via teclado
    fs: 0,              // Remove botão de fullscreen
    iv_load_policy: 3,  // Remove anotações
  };
  scrollToForm() {
    const formElement = document.querySelector('#formulario');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
