import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { states } from '../data-model';

@Component({
  selector: 'app-hero-address',
  templateUrl: './hero-address.component.html',
  styleUrls: ['./hero-address.component.css']
})
export class HeroAddressComponent implements OnInit {
  @Input() address: FormGroup;
  states = states;
  constructor() { }

  ngOnInit() {
  }

}
