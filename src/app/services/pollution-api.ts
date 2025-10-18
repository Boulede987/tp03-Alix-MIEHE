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



  public getPollutions () : Observable<SubmittedPollution[]> 
  {
      return this.http.get<SubmittedPollution[]>(environment.backendClient)
  }



  public postPollutions (pollution : SubmittedPollution) 
  {
      this.http.post(environment.backendClient, pollution)
  }



  public putPollutions (pollution : SubmittedPollution) 
  {
      this.http.put(environment.backendClient, pollution)
  }


  
  public deletePollutions (pollution : SubmittedPollution) 
  {
      this.http.delete(environment.backendClient, { body: pollution } )
  }

}
