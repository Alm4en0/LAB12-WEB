// app.config.ts
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig = {
  providers: [provideRouter(routes)],
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],

  bootstrap: [AppComponent]
};
