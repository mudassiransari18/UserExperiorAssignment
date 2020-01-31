import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-language-page',
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.css']
})
export class LanguagePageComponent implements OnInit {

  constructor( private APIService : ApiService) { }

  Details : any = "";

  ngOnInit() {
    this.APIService.PassData$.subscribe(item => {
      this.Details = item;
    });
  }

}
