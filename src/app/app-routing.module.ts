import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./pages/home/home.module').then((m)=>m.HomeModule) },
  { path: 'content/:id', component: ContentComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
