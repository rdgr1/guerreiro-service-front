import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CardAvaliationComponent } from '../../components/card-avaliation/card-avaliation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [CardAvaliationComponent, CommonModule],
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  depoimentos = [
    {
      img: 'assets/imgs/svg/profile-1.svg',
      name: 'Eduardo Santos – Barra da Tijuca, RJ',
      rating: 5,
      depoiment: 'A portaria terceirizada funcionou muito bem. Os funcionários são educados, uniformizados e seguem o protocolo de segurança à risca. Como síndico, me sinto mais tranquilo.'
    },
    {
      img: 'assets/imgs/svg/profile-2.svg',
      name: 'Sérgio Amaral – Duque de Caxias, RJ',
      rating: 4,
      depoiment: 'Boa experiência no geral. Contratamos para serviços gerais e manutenção preventiva. Cumpriram tudo conforme o contrato e sempre responderam rápido pelo WhatsApp.'
    },
    {
      img: 'assets/imgs/svg/profile-3.svg',
      name: 'Joana Lima – Nova Iguaçu, RJ',
      rating: 5,
      depoiment: 'Utilizamos o serviço de jardinagem do condomínio. O visual dos jardins melhorou muito e os moradores notaram a diferença.'
    },
  ];

  private slideWidth!: number;
  private total!: number;
  private gap = 16;
  private autoplayId!: any;
  private autoplayDelay = 4500; // 3 segundos

  ngAfterViewInit(): void {
    // só roda no browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const el = this.carousel.nativeElement;
    const cards = Array.from(el.querySelectorAll('app-card-avaliation')) as HTMLElement[];
    this.total = cards.length;
    this.slideWidth = cards[0].offsetWidth + this.gap;

    // clona todos os slides no início e no fim
    cards.forEach(card => {
      el.appendChild(card.cloneNode(true));
      el.insertBefore(card.cloneNode(true), el.firstChild);
    });

    // posiciona no “início verdadeiro”
    el.scrollLeft = this.slideWidth * this.total;

    // ao chegar nas bordas clonadas, faz o pulo silencioso
    el.addEventListener('scroll', () => {
      if (el.scrollLeft <= 0) {
        el.scrollLeft += this.slideWidth * this.total;
      } else if (el.scrollLeft >= this.slideWidth * this.total * 2) {
        el.scrollLeft -= this.slideWidth * this.total;
      }
    });

    this.startAutoplay();
  }

  scrollLeft(): void {
    const el = this.carousel.nativeElement;
    const target = el.scrollLeft - this.slideWidth;

    if (typeof el.scrollBy === 'function') {
      el.scrollBy({ left: -this.slideWidth, behavior: 'smooth' });
    } else {
      el.scrollLeft = target; // smooth via CSS
    }
  }

  scrollRight(): void {
    const el = this.carousel.nativeElement;
    const target = el.scrollLeft + this.slideWidth;

    if (typeof el.scrollBy === 'function') {
      el.scrollBy({ left: this.slideWidth, behavior: 'smooth' });
    } else {
      el.scrollLeft = target;
    }
  }

  private startAutoplay(): void {
    this.autoplayId = setInterval(() => this.scrollRight(), this.autoplayDelay);
  }

  pauseAutoplay(): void {
    clearInterval(this.autoplayId);
  }

  resumeAutoplay(): void {
    clearInterval(this.autoplayId);
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayId);
  }
}