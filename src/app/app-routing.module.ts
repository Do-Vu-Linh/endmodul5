import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FormcreatComponent} from "./formcreat/formcreat.component";
import {LocalComponent} from "./local/local.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {path :'',component : HomeComponent
  },
  {path : 'formcreat/:id',component : FormcreatComponent
  },
  {path :'local', component :LocalComponent
  },
  {path :'detail/:id',component : DetailComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
