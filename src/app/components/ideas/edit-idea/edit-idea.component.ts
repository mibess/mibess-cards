import { Component } from '@angular/core';
import { Idea } from '../idea';
import { IdeaService } from '../idea.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.component.html',
  styleUrls: ['./edit-idea.component.scss'],
})
export class EditIdeaComponent {
  idea: Idea = {
    content: '',
    author: '',
    model: '',
    createdAt: '',
  };

  constructor(
    private service: IdeaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');

    if (code) {
      this.service.findByCode(code).subscribe((idea) => {
        this.idea = idea;
      });
    }
  }

  editIdea() {
    if (this.idea.code) {
      this.service.editCard(this.idea).subscribe(() => {
        this.router.navigate(['list-idea']);
      });
    }
  }

  cancelEdit() {
    this.router.navigate(['list-idea']);
  }
}
