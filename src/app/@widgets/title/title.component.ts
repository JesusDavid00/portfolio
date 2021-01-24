import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title  : string;
  @Input() dark   = false;
  @Input() color  : string;
  @Input() divider: string;
  constructor() { }

  ngOnInit(): void {
    if(this.dark){
      this.color = 'text-secondary'
      this.divider = '';
    }else{
      this.color = 'text-white'
      this.divider = 'text-light'
    }
  }

}
