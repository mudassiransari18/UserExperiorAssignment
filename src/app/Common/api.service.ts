import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http:HttpClient) { }

  private passData = new BehaviorSubject<any>([]);
  PassData$ = this.passData.asObservable();

  ServiceCall(req? : string){
    return this.Http.get(req == undefined ? `${environment.api_url}all` : `${environment.api_url}alpha/${req}`)
  }


  send(value : any){
    this.passData.next(value);
  }
}
