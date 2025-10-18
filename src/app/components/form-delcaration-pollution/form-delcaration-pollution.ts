import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { SubmittedPollution } from '../../classes/submittedPollution/submitted-pollution';
import { PollutionRecap } from '../pollution-recap/pollution-recap';
import { PollutionAPI } from '../../services/pollution-api';

@Component({
  selector: 'app-form-delcaration-pollution',
  imports: [ReactiveFormsModule, PollutionRecap],
  templateUrl: './form-delcaration-pollution.html',
  styleUrl: './form-delcaration-pollution.scss'
})
export class FormDelcarationPollution implements OnInit {

  @Input({ required: false }) pollution ? : SubmittedPollution

  submitted : boolean = false
  isEditMode: boolean = false
  
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
  })


  constructor(private pollutionApi : PollutionAPI) 
  {
    //
  }


  ngOnInit() 
  {
    // Si on as une pollution passée en paramètre, on est en mode édition.
    this.isEditMode = (this.pollution != null)
    
    if (this.isEditMode && this.pollution) {
      // Populate form with existing data
      this.pollutionForm.patchValue
      (
        {
          titre: this.pollution.titre,
          type: this.pollution.type,
          description: this.pollution.description,
          date: this.pollution.date.toDateString(),
          lieu: this.pollution.lieu,
          longitude: this.pollution.longitude.toString(),
          latitude: this.pollution.latitude.toString(),
          photo: this.pollution.photo
        }
      )
    }
  }


  onSubmit()
  {
    this.pollution = Object.assign(new SubmittedPollution(), this.pollutionForm.value)

    if (this.isEditMode && this.pollution) // si on est en mode edition
    {
      this.pollutionApi.putPollution(this.pollution)
    }
    else  // sinon, on est en creation
    {
      this.pollutionApi.postPollution(this.pollution)
    }

    this.submitted = true
  }

}




