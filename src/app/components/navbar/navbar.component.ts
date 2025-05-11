import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
menuOpen = false;
isBrowser = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit():void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser){
       console.log('Rodando no browser')
    }
  }
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
