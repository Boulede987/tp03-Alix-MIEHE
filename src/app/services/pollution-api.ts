import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SubmittedPollution } from '../classes/submittedPollution/submitted-pollution';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PollutionAPI {

  constructor(private http:HttpClient) { }

  public getClients () : Observable<SubmittedPollution[]> 
  {
      return this.http.get<SubmittedPollution[]>(environment.backendClient)
  }

}
