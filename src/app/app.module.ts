import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateIdeaComponent } from './components/ideas/create-idea/create-idea.component';
import { FormsModule } from '@angular/forms';
import { ListIdeaComponent } from './components/ideas/list-idea/list-idea.component';
import { CardComponent } from './components/ideas/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteIdeaComponent } from './components/ideas/delete-idea/delete-idea.component';
import { EditIdeaComponent } from './components/ideas/edit-idea/edit-idea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateIdeaComponent,
    ListIdeaComponent,
    CardComponent,
    DeleteIdeaComponent,
    EditIdeaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
