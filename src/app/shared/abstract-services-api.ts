import {HttpHeaders} from "@angular/common/http";


export abstract class AbstractServicesApi{
  protected getHeaders():HttpHeaders{
  let headers = new HttpHeaders();
  headers = headers.set('accept', 'application/json');
  return headers;
  }

}
