import { CountryService } from './../../services/countryservice';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent implements OnInit {
  selectCountries: string[];
  checked: Boolean;
  countries: Country[];

  constructor(private countryservice: CountryService) { }

  ngOnInit() {
    this.countryservice.getCountries().then(data => this.countries = data.map(item => item));
  }

}
