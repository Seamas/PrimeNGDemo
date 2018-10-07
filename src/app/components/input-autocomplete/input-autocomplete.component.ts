import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/countryservice';
// import { } from 'rxjs/operator/'

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.css']
})

export class InputAutocompleteComponent implements OnInit {

  text: string;
  results: string[];

  country: string;
  countries: string[];

  multies: any[];
  filteredMulti: any[];

  constructor(private countryservice: CountryService) { }

  ngOnInit() {
  }

  search(event) {
    const query = event.query;
    this.countryservice.getCountries().then(data => {
      this.results = data.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1).map(item => item.name);
    });
  }

  filter(event) {
    const query = event.query;
    this.countryservice.getCountries().then(data => {
      this.countries = data.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
        .map(item => item.name);
    });
  }

  filterMulti(event) {
    const query = event.query;
    this.countryservice.getCountries().then(data => {
      this.filteredMulti = data.filter(item => item.name.toLocaleLowerCase().indexOf(query.toLowerCase()) > -1)
        .map(item => item.name);
    });
  }
}
