import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() image ?: string;
  @Input() description ?: string;
  @Input() title ?: string;
  @Input() category ?: string;

  @Input() width : number = 200;
  @Input() height : number = 250;

}
