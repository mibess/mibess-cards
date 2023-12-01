import { Component } from '@angular/core';

@Component({
  selector: 'app-list-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: ['./list-idea.component.scss'],
})
export class ListIdeaComponent {
  listCards = [
    {
      id: 1,
      content: 'I love AngularI learning new skillsI learning new skills',
      author: 'Mibess',
      model: 'model3',
    },
    {
      id: 2,
      content:
        'I learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skillsI learning new skills',
      author: 'Frederico',
      model: 'model1',
    },
    {
      id: 3,
      content:
        'I love AngularI learning new skillsI learskillsI learning new skillsskillsI learning new skillsning new skills',
      author: 'Mibess',
      model: 'model3',
    },
    {
      id: 4,
      content:
        'I love AngularI learning new skillsI learning newskillsI learning new skillsskillsI learning new skillsskillsI learning new skillsskillsI learning new skillsskillsI learning new skillsskillsI learning new skillsskillsI learning new skillsskillsI learning new skillsskillsI learning new skills skills',
      author: 'Mibess',
      model: 'model3',
    },
  ];
}
