import { SelectItem } from 'primeng/primeng';
import { City } from './../../models/city';
import { CityService } from './../../services/cityservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-select-button',
  templateUrl: './input-select-button.component.html',
  styleUrls: ['./input-select-button.component.css']
})
export class InputSelectButtonComponent implements OnInit {

  cities: City[];
  selectedCity: City;
  selectedCities: City[];

  constructor(private cityservice: CityService) { }

  ngOnInit() {
    this.cityservice.getCities().then(data => this.cities = data.map(item => item));
  }

}
