import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomerComponent } from './customer/customer.component';
import { RegmanagerComponent } from './regmanager/regmanager.component';

const routes: Routes = [
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'Customer',
        component:CustomerComponent
      },
      {
        path:'RegionalManager',
        component:RegmanagerComponent
      }
    ]
    
  },
  {
    path:'**',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
