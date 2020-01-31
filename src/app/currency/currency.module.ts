import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module'
import { CurrencyPageComponent } from './currency-page/currency-page.component';

@NgModule({
  declarations: [
    CurrencyPageComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule
  ]
})
export class CurrencyModule { }
