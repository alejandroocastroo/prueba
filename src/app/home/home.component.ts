import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  events: any = [];


  constructor(public servicesServices:ServicesService) {
   this.getEvents();
   }

  ngOnInit() {

  }
  public getEvents(){
    //console.log('hola');
    this.servicesServices.getData()
    .subscribe(res => {
      this.events = res.eventos;
      console.log(res);
    })
  }

}
