import { City } from './../../models/city';
import { CityService } from './../../services/cityservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-radiobutton',
  templateUrl: './input-radiobutton.component.html',
  styleUrls: ['./input-radiobutton.component.css']
})
export class InputRadiobuttonComponent implements OnInit {

  cities: City[];
  selectedCity: any;
  val1: any;

  constructor(private cityservice: CityService) { }

  ngOnInit() {
    this.cityservice.getCities().then(data => this.cities = data.map(item => item));
  }

}
