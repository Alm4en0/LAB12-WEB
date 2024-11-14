import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
