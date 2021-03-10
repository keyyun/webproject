import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulestudentPageRoutingModule } from './schedulestudent-routing.module';

import { SchedulestudentPage } from './schedulestudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulestudentPageRoutingModule
  ],
  declarations: [SchedulestudentPage]
})
export class SchedulestudentPageModule {}
