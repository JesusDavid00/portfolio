import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  @Input() modals:   string;
  public   idModals: string;
  public   title:    string;
  @Input() isSelect: string;
  constructor() { }

  ngOnInit(): void {
   if(this.modals == 'portfolioModal1'){
     this.idModals = 'portfolioModal1';
     this.title = "Inventario"
     this.isSelect = 'assets/img/portfolio/pagina1.PNG'
     console.log("esto esta bien");
   }
   if(this.modals == 'portfolioModal2'){
    this.idModals = 'portfolioModal2';
    this.title = "Mini crud con angular"
    this.isSelect = 'assets/img/portfolio/crup.PNG'
    console.log("esto esta ");
  }
  if(this.modals == 'portfolioModal3'){
    this.idModals = 'portfolioModal3';
    this.title = "Senfrulact"
    this.isSelect = 'assets/img/portfolio/pagina2.PNG'
    console.log("esto esta bien....");
  }
  }

}
