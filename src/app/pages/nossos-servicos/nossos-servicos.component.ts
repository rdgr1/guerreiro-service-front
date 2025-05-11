import { Component } from '@angular/core';
import { CardServicesComponent } from "../../components/card-services/card-services.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nossos-servicos',
  imports: [CardServicesComponent,CommonModule],
  templateUrl: './nossos-servicos.component.html',
  styleUrl: './nossos-servicos.component.scss'
})
export class NossosServicosComponent {
  get linhas() {
    const blocos = [];
    for (let i = 0; i < this.servicos.length; i += 4) {
      blocos.push(this.servicos.slice(i, i + 4));
    }
    return blocos;
  }
  servicos = [
    {
      img: 'assets/imgs/svg/cards-servicos/admop.svg',
      textPrimary: 'Apoio',
      textSecondary: 'Administrativo e Operacional'
    },
    {
      img: 'assets/imgs/svg/cards-servicos/limpezavidros.svg',
      textPrimary: 'Limpeza de',
      textSecondary: 'Vidros'
    },
    {
      img: 'assets/imgs/svg/cards-servicos/areasverdes.svg',
      textPrimary: 'Manutenção de',
      textSecondary: 'Áreas Verdes'
    },
    {
      img: 'assets/imgs/svg/cards-servicos/recpcionista.svg',
      textPrimary: 'Oferecemos',
      textSecondary: 'Ascensoristas e Recepcionista'
    },
    {
      img: 'assets/imgs/svg/cards-servicos/garcom.svg',
      textPrimary: 'Coperias e',
      textSecondary: 'Garçons'
    },
    {
      img: 'assets/imgs/svg/cards-servicos/zelador.svg',
      textPrimary: 'Oferecemos',
      textSecondary: 'Porteiros e Zeladores'
    },
    {
      img: 'assets/imgs/svg/cards-servicos/vigilante.svg',
      textPrimary: 'Oferecemos',
      textSecondary: 'Vigilância'
    },
    {
      img: 'assets/imgs/svg/cards-servicos/motoboy.svg',
      textPrimary: 'Contínuos,',
      textSecondary: 'Mensageiros e Motoboys'
    }
  ];
}