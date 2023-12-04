import { Component, Input } from '@angular/core';
import { Idea } from '../idea';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: Idea = {
    code: '',
    content: 'I love Angular',
    author: 'Mibess',
    model: 'model3',
    createdAt: '',
  };

  cardWidth(): string {
    if (this.card.content.length >= 256) return 'card-g';

    return 'card-p';
  }
}
