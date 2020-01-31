import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { LanguagePageComponent } from './language-page/language-page.component';


const routes : Routes = [
    {
        path : '',
        component : LanguagePageComponent
    },
    {
        path : '**',   // no page found 404 
        component : LanguagePageComponent
    }

]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})


export class LanguageRoutingModule { }
    

