import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingRoutingModule } from './components-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [AboutComponent,
  HomeComponent,
ContactComponent,
ProjectsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingRoutingModule,

  ]
})
export class ComponentsRoutingModule { }
