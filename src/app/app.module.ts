import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjetsComponent } from './projets/projets.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { BacklogComponent } from './backlog/backlog.component';
import { GitComponent } from './git/git.component';
import { AuthComponent } from './auth/auth.component';
import { KanbanComponent } from './kanban/kanban.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjetsComponent,
    PersonnesComponent,
    BacklogComponent,
    GitComponent,
    AuthComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
