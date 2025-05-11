import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ButtonSecondComponent } from "../../components/button-second/button-second.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [ButtonSecondComponent,CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  videoStarted = false;
  playVideo(video: HTMLVideoElement) {
    // Garante que não reinicia se já estiver tocando
    if (video.paused) {
      video.play();
      this.videoStarted = true;
    }
  }
  onEnded() {
    this.videoStarted = false;      // mostra de novo o botão ▶
  }
  scrollToForm() {
    const formElement = document.querySelector('#formulario');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  onPlay() {
    this.videoStarted = true;
  }
}
