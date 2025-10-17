import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { SubmittedPollution } from '../../classes/submittedPollution/submitted-pollution';
import { FormDelcarationPollutionRecap } from '../form-delcaration-pollution-recap/form-delcaration-pollution-recap';

@Component({
  selector: 'app-form-delcaration-pollution',
  imports: [ReactiveFormsModule, FormDelcarationPollutionRecap],
  templateUrl: './form-delcaration-pollution.html',
  styleUrl: './form-delcaration-pollution.scss'
})
export class FormDelcarationPollution {

  pollution : SubmittedPollution = new SubmittedPollution

  submitted : boolean = false
  
  pollutionForm = new FormGroup({
    // Validators.required -> oblige re remplir le formulaire, d'une certaine manière
    // le bouton submt n'est pas utilisable tant que ce n'est pas valide
    titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    type: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    date: new FormControl('', [Validators.required]),
    lieu: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required, Validators.min(-180), Validators.max(180)]),
    latitude: new FormControl('', [Validators.required, Validators.min(-90), Validators.max(90)]),
    photo: new FormControl('')
  });

  onSubmit()
  {
    this.pollution = Object.assign(new SubmittedPollution(), this.pollutionForm.value);
    this.submitted = true;
  }

}
