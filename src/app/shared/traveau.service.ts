import { Injectable } from '@angular/core';
import {AbstractServicesApi} from "./abstract-services-api";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class TraveauService extends AbstractServicesApi{
  ressourceUrl = environment.apiUrl + '/api.php?type=traveau';

  constructor(private http: HttpClient) {
    super();
  }

  getTraveau():Observable<any>{
    return this.http.get(this.ressourceUrl);
  }



}



