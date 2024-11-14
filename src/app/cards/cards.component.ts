import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() imageSrc : string = '';
  @Input() title: string = '';
  @Input() description: string = ''
}
