import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagePageComponent } from './language-page/language-page.component';
import { LanguageRoutingModule } from './language-routing.module';

@NgModule({
  declarations: [LanguagePageComponent],
  imports: [
    CommonModule,
    LanguageRoutingModule
  ]
})
export class LanguageModule { }
