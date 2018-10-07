import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.css']
})
export class InputEditorComponent implements OnInit {

  // npm install quill --save

  // scripts
  // "node_modules/quill/dist/quill.js"

  // styles
  // "node_modules/quill/dist/quill.core.css",
  // "node_modules/quill/dist/quill.snow.css"

  text = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  text2: string;
  constructor() { }

  ngOnInit() {
  }

}
