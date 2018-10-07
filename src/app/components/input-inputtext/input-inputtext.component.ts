import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-inputtext',
  templateUrl: './input-inputtext.component.html',
  styleUrls: ['./input-inputtext.component.css']
})
export class InputInputtextComponent implements OnInit {

  text: string;
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }
}
