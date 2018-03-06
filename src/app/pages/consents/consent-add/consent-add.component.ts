import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';

import { ActionUserConsentsAdd } from '../user-consents.reducer';


const NAME_MAX_LENGTH = 50;

@Component({
  selector: 'di-consent-add',
  templateUrl: './consent-add.component.html',
  styleUrls: ['./consent-add.component.scss'],
})
export class ConsentAddComponent implements OnInit {
  public maxLength = NAME_MAX_LENGTH;
  public consentsMap;
  public consentForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private store: Store<any>) {
    this.consentsMap = {
      'newsletter': 'Receive newsletter',
      'targetedAds': 'Be shown targeted ads',
      'anonymousStatistics': 'Contribute to anonymous visit statistics'
    };
    this.createForm();
  }

  public ngOnInit() {
  }

  public createForm() {
    this.consentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(this.maxLength)]],
      email: ['', [Validators.required, Validators.email]],
      // TODO: fix an issue with FormArray and use it instead
      // consents: this.fb.array(Object.keys(this.consentsMap).map(consent => new FormControl(consent))),
      newsletter: [''],
      targetedAds: [''],
      anonymousStatistics: [''],
    });
  }

  public onChange(value: MatCheckboxChange) {
    const consents: FormArray = <FormArray>this.consentForm.get('consents');

    if (value.checked) {
      consents.push(new FormControl(value.source.value))
    } else {
      const consent = consents.controls.findIndex(control => control.value === value.source.value);
      consents.removeAt(consent);
    }
  }

  public addConsent() {
    // console.log(this.consentForm.value);

    const prepUserConsent = this.consentForm.value;
    const { name, email } = this.consentForm.value;

    if (!(name && email)) {
      return;
    }

    const consents = Object.keys(this.consentsMap).filter(consentKey => prepUserConsent[consentKey] && consentKey);

    this.store.dispatch(new ActionUserConsentsAdd({ userConsent: { name, email, consents }}));
    this.consentForm.reset();

    this.router.navigate(['../list'], { relativeTo: this.route });
  }
}
