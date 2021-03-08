import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  rutaDdf: string = "D:\Desktop\crup angular\portfolio/src/assets/img/hoja.pdf"
  constructor() { }

  ngOnInit(): void {
  }

  downloadDdf(){
    console.log("esto es para descargar: " , this.rutaDdf);

  }

}
