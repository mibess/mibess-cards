import { Component } from '@angular/core';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss'],
})
export class CreateIdeaComponent {
  idea = {
    id: 1,
    content: 'Idea about something',
    author: 'Mibess',
    model: 'model2',
  };

  createIdea() {
    alert('Hello');
  }
}
