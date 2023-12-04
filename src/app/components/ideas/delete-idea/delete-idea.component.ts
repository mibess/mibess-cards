import { Component } from '@angular/core';
import { Idea } from '../idea';
import { IdeaService } from '../idea.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-idea',
  templateUrl: './delete-idea.component.html',
  styleUrls: ['./delete-idea.component.scss'],
})
export class DeleteIdeaComponent {
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

  deleteCard() {
    if (this.idea.code) {
      this.service.deleteCard(this.idea.code).subscribe(() => {
        this.router.navigate(['list-idea']);
      });
    }
  }

  cancelDelete() {
    this.router.navigate(['list-idea']);
  }
}
