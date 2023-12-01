import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  card = {
    content: 'I love Angular',
    author: 'Mibess',
    model: 'model3',
  };

  cardWidth(): string {
    if (this.card.content.length >= 256) return 'card-g';

    return 'card-p';
  }
}
