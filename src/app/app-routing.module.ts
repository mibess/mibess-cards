import { DeleteIdeaComponent } from './components/ideas/delete-idea/delete-idea.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIdeaComponent } from './components/ideas/create-idea/create-idea.component';
import { ListIdeaComponent } from './components/ideas/list-idea/list-idea.component';
import { EditIdeaComponent } from './components/ideas/edit-idea/edit-idea.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-idea',
    pathMatch: 'full',
  },
  {
    path: 'create-idea',
    component: CreateIdeaComponent,
  },
  {
    path: 'list-idea',
    component: ListIdeaComponent,
  },
  {
    path: 'delete-idea/:code',
    component: DeleteIdeaComponent,
  },
  {
    path: 'edit-idea/:code',
    component: EditIdeaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
