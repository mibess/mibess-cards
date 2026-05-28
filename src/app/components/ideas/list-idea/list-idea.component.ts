import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Idea } from '../idea';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-list-idea',
  standalone: false,
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.scss'],
})
export class ListIdeaComponent implements OnInit {
  listCards: Idea[] = [];

  constructor(
    private service: IdeaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.service.listAllCards().subscribe((listAllCards) => {
      this.listCards = listAllCards;
      console.log(this.listCards);
      this.cdr.detectChanges();
    });
  }
}

