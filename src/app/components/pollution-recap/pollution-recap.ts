import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SubmittedPollution } from '../../classes/submittedPollution/submitted-pollution';

@Component({
  selector: 'app-pollution-recap',
  imports: [DatePipe],
  templateUrl: './pollution-recap.html',
  styleUrl: './pollution-recap.scss'
})
export class PollutionRecap {

  @Input({ required: true }) pollution : SubmittedPollution = new SubmittedPollution
  @Input({ required: false }) isRecap : boolean = false 

  showDetail : boolean = false

  changeShowDetail(show : boolean)
  {
    this.showDetail = show
  }
  
}
