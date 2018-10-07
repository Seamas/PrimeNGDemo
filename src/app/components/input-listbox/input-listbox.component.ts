import { CarService } from './../../services/carservice';
import { City } from './../../models/city';
import { CityService } from './../../services/cityservice';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-input-listbox',
  templateUrl: './input-listbox.component.html',
  styleUrls: ['./input-listbox.component.css']
})
export class InputListboxComponent implements OnInit {

  cities: City[];
  selectedCity: City;
  selectedCities: City[];

  cars: SelectItem[];

  selectedCar = 'BMW';

  constructor(private cityservice: CityService, private carservice: CarService) { }

  ngOnInit() {
    this.cityservice.getCities().then(data => this.cities = data.map(item => item));
    this.carservice.getCars().then(data => this.cars = data.map(item => item));
  }

}
