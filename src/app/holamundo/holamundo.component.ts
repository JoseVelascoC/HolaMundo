import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holamundo',
  templateUrl: './holamundo.component.html',
  styleUrls: ['./holamundo.component.css']
})
export class HolamundoComponent implements OnInit {

  holaMundo="";
  constructor() { }

  ngOnInit(): void {
    this.holaMundo="0";
  }

}
