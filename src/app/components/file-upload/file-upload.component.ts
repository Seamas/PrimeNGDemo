import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  uploadedFile: any;

  constructor() { }

  ngOnInit() {
  }

  onUpload(event) {
    console.log(event);
    event.files.forEach(element => {
      console.log(element);
    });

    console.log(event.xhr.response);
  }

}
