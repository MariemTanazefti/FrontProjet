import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BacklogComponent } from './backlog/backlog.component';
import { GitComponent } from './git/git.component';
import { KanbanComponent } from './kanban/kanban.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  {path:'projets',component:ProjetsComponent},
  {path:'personnes',component:PersonnesComponent},
  {path:'backlog',component:BacklogComponent},
  {path:'git',component:GitComponent},
  {path:'kanban',component:KanbanComponent},
  {path:'auth',component:AuthComponent},
  { path: '',   redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
