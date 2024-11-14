import {
  Component,
  Inject,
  NgModule,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import AOS from 'aos';

import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductoComponent } from './producto/producto.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { FooterComponent } from './footer/footer.component';
import { MarcasComponent } from './marcas/marcas.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductoComponent,
    ContactanosComponent,
    FooterComponent,
    MarcasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init(); // Solo inicializar en el navegador
    }

    // Desplazamiento suave cuando se cambia de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Espera un pequeño tiempo para que la página se haya cargado antes de desplazar
        setTimeout(() => {
          const fragment = this.router.url.split('#')[1];
          if (fragment) {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 0);
      }
    });
  }
}
