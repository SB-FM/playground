import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { states } from '../data-model';

@Component({
  selector: 'my-app',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  formDetail: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formDetail = this.formBuilder.group({
      firstname: '',
      useraccount: this.formBuilder.group({
        useracc: '',
        userpass: ''
      })
    });

  }
}
