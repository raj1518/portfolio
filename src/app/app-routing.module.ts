import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { LayoutContentComponent } from './pages/layout/layout-content/layout-content.component';
import { HomeComponent } from './pages/components/home/home.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ComponentsComponent } from './pages/components/components.component';

const routes: Routes = [{
  path:'',
  component:LoginComponent,
  pathMatch:'full'
},
{
    path:'layout',
    component:LayoutContentComponent,children:[
      // { path:'home',component:HomeComponent },
      // {path:'contacts',component:ContactComponent},
      {path:'main',
      // component:ComponentsComponentD:\portfolio\app\src\app\pages\components\components.module.ts
    loadChildren:() => import('./pages/components/components.module')
    .then(a =>a.ComponentsRoutingModule),
    }
    ]
  },
// {
//   path:'layout',
//   component:LayoutContentComponent,children:[
//     { path:'home',component:HomeComponent },
//     {path:'contacts',component:ContactComponent},
//     {path:'about',component:AboutComponent}
//   ]
// },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
