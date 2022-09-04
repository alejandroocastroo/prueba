import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab4Component } from "./tab4/tab4.component"
import { Tab4RoutingModule } from './tab4-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Tab4Component }]),
    Tab4RoutingModule,
  ],
  declarations: [Tab4Component]
})
export class Tab4Module { }
