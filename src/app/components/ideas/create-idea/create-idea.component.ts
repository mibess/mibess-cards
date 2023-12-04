import { Component } from '@angular/core';
import { Idea } from '../idea';
import { IdeaService } from '../idea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss'],
})
export class CreateIdeaComponent {
  idea: Idea = {
    content: '',
    author: '',
    model: '',
    createdAt: '',
  };

  constructor(private service: IdeaService, private router: Router) {}

  createIdea() {
    this.service.createCard(this.idea).subscribe(() => {
      this.router.navigate(['list-idea']);
    });
  }
}
