import { Injectable } from '@angular/core';
import {AbstractServicesApi} from "./abstract-services-api";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Contact} from "./model/contact.module";

@Injectable({
  providedIn: 'root'
})

  export class ContactFormService {
  ressourceUrl = 'http://localhost/portfolio2/api.php?type=contact';

  private httpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json',

  });

  constructor(private http: HttpClient ) { }

  postContactForm(contactMessage: Contact) : Observable<HttpResponse<Contact>> {
    return this.http.post<Contact>(this.ressourceUrl, contactMessage, {observe: 'response', headers:this.httpHeaders});
  }

  getContact(contactMessage: Contact):Observable<any>{
    return this.http.get(this.ressourceUrl);
  }
}






/*constructor(private http: HttpClient) {
  super();
}

getMessage():Observable<any>{
  return this.http.get(this.ressourceUrl);
}

create(contact : Contact): Observable<HttpResponse<Contact>>{
return this.http.post<Contact>(this.ressourceUrl, contact,{observe:'response', headers:this.getHeaders()
})
}*/



