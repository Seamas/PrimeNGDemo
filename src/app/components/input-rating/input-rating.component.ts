import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-rating',
  templateUrl: './input-rating.component.html',
  styleUrls: ['./input-rating.component.css']
})
export class InputRatingComponent implements OnInit {

  val = 3;
  msg: any;

  constructor() { }

  ngOnInit() {
  }

  handleRate(event) {
    this.msg = `You have rated ` + this.val;
  }

  handleCancel(event) {
    this.msg = `You have canceled rating`;
  }

}
