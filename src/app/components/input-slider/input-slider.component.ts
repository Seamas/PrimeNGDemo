import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.css']
})
export class InputSliderComponent implements OnInit {

  val: number;
  rangeValues: number[] = [20, 80];
  constructor() { }

  ngOnInit() {
  }

}
