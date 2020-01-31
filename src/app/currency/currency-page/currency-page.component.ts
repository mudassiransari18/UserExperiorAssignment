import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.css']
})
export class CurrencyPageComponent implements OnInit {

  constructor( private APIService : ApiService) { }

  Details : any = "";

  ngOnInit() {
    this.APIService.PassData$.subscribe(item => {
      this.Details = item;
    });
  }

}
