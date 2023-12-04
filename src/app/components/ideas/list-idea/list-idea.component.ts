import { Component } from '@angular/core';
import { Idea } from '../idea';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-list-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.scss'],
})
export class ListIdeaComponent {
  listCards: Idea[] = [];

  constructor(private service: IdeaService) {}

  ngOnInit() {
    this.service.listAllCards().subscribe((listAllCards) => {
      this.listCards = listAllCards;
    });
  }
}
