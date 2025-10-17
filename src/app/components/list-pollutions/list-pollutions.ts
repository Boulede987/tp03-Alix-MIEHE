import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PollutionAPI } from '../../services/pollution-api';
import { SubmittedPollution } from '../../classes/submittedPollution/submitted-pollution';

@Component({
  selector: 'app-list-pollutions',
  imports: [],
  templateUrl: './list-pollutions.html',
  styleUrl: './list-pollutions.scss'
})
export class ListPollutions implements OnInit {

  submittedPollutions$ ? : Observable<SubmittedPollution[]>

  constructor(private pollutionApi : PollutionAPI) { }

  ngOnInit() {
    this.submittedPollutions$ = this.pollutionApi.getClients ();
  }
}
