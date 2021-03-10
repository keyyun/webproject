import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexAdminPage } from './index-admin.page';

const routes: Routes = [
  {
    path: '',
    component: IndexAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexAdminPageRoutingModule {}
