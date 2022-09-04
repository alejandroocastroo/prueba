import { Component } from '@angular/core';

import {AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

  constructor(public toastController:ToastController) {
    
  }

   async alertaBasica(){

    const toast = await this.toastController.create({
      message: 'Hola, Bien venido',
      duration: 1000,
      position: "middle"
      
      
    });

    toast.present()

    
  }
}
