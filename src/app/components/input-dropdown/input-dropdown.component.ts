import { CityService } from './../../services/cityservice';
import { City } from './../../models/city';
import { Component, OnInit } from '@angular/core';
import { SelectItem, SelectItemGroup } from 'primeng/primeng';


@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css']
})

export class InputDropdownComponent implements OnInit {

  cities: City[];

  city: City;
  editCity: string;

  cars: SelectItem[];
  car: string;
  selectedCar = 'BMW';


  groupSelect: string;

  groupedCars: SelectItemGroup[];

  constructor(private cityservice: CityService) {
    this.cars = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.groupedCars = [
      {
        label: 'Germany', value: 'germany.png',
        items: [
          { label: 'Audi', value: 'Audi' },
          { label: 'BMW', value: 'BMW' },
          { label: 'Mercedes', value: 'Mercedes' }
        ]
      },
      {
        label: 'USA', value: 'usa.png',
        items: [
          { label: 'Cadillac', value: 'Cadillac' },
          { label: 'Ford', value: 'Ford' },
          { label: 'GMC', value: 'GMC' }
        ]
      },
      {
        label: 'Japan', value: 'japan.png',
        items: [
          { label: 'Honda', value: 'Honda' },
          { label: 'Mazda', value: 'Mazda' },
          { label: 'Toyota', value: 'Toyota' }
        ]
      }
    ];
  }

  ngOnInit() {
    this.cityservice.getCities().then(data => {
      this.cities = data.map(item => item);
    });
  }
}
