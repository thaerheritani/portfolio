import { Injectable } from '@angular/core';
import {AbstractServicesApi} from "./abstract-services-api";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ServicesService extends AbstractServicesApi{
  ressourceUrl = 'http://localhost/portfolio2/api.php?type=services';

  constructor(private http: HttpClient) {
    super();

  }

  getServices():Observable<any>{
    return this.http.get(this.ressourceUrl);
  }

}



