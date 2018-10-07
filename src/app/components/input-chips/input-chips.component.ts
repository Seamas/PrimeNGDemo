import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-chips',
  templateUrl: './input-chips.component.html',
  styleUrls: ['./input-chips.component.css']
})
export class InputChipsComponent implements OnInit {

  values: string[];
  templates: string[];
  constructor() { }

  ngOnInit() {

  }

}
