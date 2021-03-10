import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountstudentPageRoutingModule } from './accountstudent-routing.module';

import { AccountstudentPage } from './accountstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountstudentPageRoutingModule
  ],
  declarations: [AccountstudentPage]
})
export class AccountstudentPageModule {}
