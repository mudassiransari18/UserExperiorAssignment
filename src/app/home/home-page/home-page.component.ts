import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Common/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private APIService:ApiService) { }

  Details : any = "";

  ngOnInit() {
    this.APIService.PassData$.subscribe(item =>{
      this.Details = item;
    });
  }

}
