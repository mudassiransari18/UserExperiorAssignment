import { Component, OnInit } from '@angular/core';
import { ApiService } from './Common/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  Countries : any;
  SelectedCountry : any  = '';

  constructor(private APIService : ApiService) { }

  ngOnInit(){
    this.APIService.ServiceCall().subscribe(data => {
      this.Countries = data;
    });
  }
  
  ChangeFn(){
    this.APIService.ServiceCall(this.SelectedCountry.alpha3Code).subscribe(data=>{
      this.APIService.send(data);  
    });
  }
}
