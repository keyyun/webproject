import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountstudentPage } from './accountstudent.page';

const routes: Routes = [
  {
    path: '',
    component: AccountstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountstudentPageRoutingModule {}
