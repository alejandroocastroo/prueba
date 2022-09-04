import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ServicesService } from '../services/services.service';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, HomeComponent],
  providers: [ServicesService]
})
export class TabsPageModule {}
