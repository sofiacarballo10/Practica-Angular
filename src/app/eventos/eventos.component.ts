import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick($event: any){
    console.log('se pulso el boton');
    console.log($event);
  }

  onChange($event: any){
    console.log($event.target.value);
  }

}
