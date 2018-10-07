import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-colorpicker',
  templateUrl: './input-colorpicker.component.html',
  styleUrls: ['./input-colorpicker.component.css']
})
export class InputColorpickerComponent implements OnInit {

  color: string;
  color2: string;

  constructor() { }

  ngOnInit() {
    // this.color2 = {
    //   r: 100, g: 130, b: 150
    // };
  }

}
