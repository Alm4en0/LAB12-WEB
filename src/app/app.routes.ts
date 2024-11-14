import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductoComponent } from './producto/producto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MarcasComponent } from './marcas/marcas.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'productos', component: ProductoComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'marcas', component: MarcasComponent},
    {path: 'contactanos', component: ContactanosComponent},
];
