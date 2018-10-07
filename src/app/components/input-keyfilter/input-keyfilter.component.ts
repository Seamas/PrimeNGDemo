import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-keyfilter',
  templateUrl: './input-keyfilter.component.html',
  styleUrls: ['./input-keyfilter.component.css']
})
export class InputKeyfilterComponent implements OnInit {

  blockSpecial: RegExp = /^[^<>*!]+$/;

  blockSpace: RegExp = /[^\s]/;

  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

  cc: string;

  constructor() { }

  ngOnInit() {
  }

}
