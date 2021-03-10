import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexAdminPageRoutingModule } from './index-admin-routing.module';

import { IndexAdminPage } from './index-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexAdminPageRoutingModule
  ],
  declarations: [IndexAdminPage]
})
export class IndexAdminPageModule {}
