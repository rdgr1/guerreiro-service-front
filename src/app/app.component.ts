import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NossosServicosComponent } from './pages/nossos-servicos/nossos-servicos.component';
import { BeneficiosComponent } from "./pages/beneficios/beneficios.component";
import { DepoimentosComponent } from "./pages/depoimentos/depoimentos.component";
import { FormularioOrcamentoComponent } from "./pages/formulario-orcamento/formulario-orcamento.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, InicioComponent, NossosServicosComponent, CommonModule, BeneficiosComponent, DepoimentosComponent, FormularioOrcamentoComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

voltarAoTopo(event: Event) : void {
  if(isPlatformBrowser(this.platformId)){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }    
 }
}

