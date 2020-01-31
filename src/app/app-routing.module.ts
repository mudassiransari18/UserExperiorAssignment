import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : 'home', 
    loadChildren : './home/home.module#HomeModule'
  },
  { path : 'language', 
    loadChildren : './language/language.module#LanguageModule'
  },
  { path : 'currency', 
    loadChildren : './currency/currency.module#CurrencyModule'
  },
  { path : '', 
    loadChildren : './home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
