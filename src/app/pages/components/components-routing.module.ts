import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComponentsComponent } from './components.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path:'',
    component:ComponentsComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'contacts',
    component:ContactComponent
  },
  {
    path:'project',
    component:ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingRoutingModule { }
