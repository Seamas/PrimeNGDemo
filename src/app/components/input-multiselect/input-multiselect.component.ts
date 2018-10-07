import { CarService } from './../../services/carservice';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-input-multiselect',
  templateUrl: './input-multiselect.component.html',
  styleUrls: ['./input-multiselect.component.css']
})
export class InputMultiselectComponent implements OnInit {

  cars: SelectItem[];
  selectedCars1: string[] = [];
  selectedCars2: string[] = [];

  constructor(private carservice: CarService) { }

  ngOnInit() {
    this.carservice.getCars().then(data => this.cars = data.map(item => item));
  }

}
