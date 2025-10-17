import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SubmittedPollution } from '../../classes/submittedPollution/submitted-pollution';

@Component({
  selector: 'app-form-delcaration-pollution-recap',
  imports: [DatePipe],
  templateUrl: './form-delcaration-pollution-recap.html',
  styleUrl: './form-delcaration-pollution-recap.scss'
})
export class FormDelcarationPollutionRecap {

  @Input({ required: true }) pollution : SubmittedPollution = new SubmittedPollution
  
}
