import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserlogsPage } from './userlogs.page';

const routes: Routes = [
  {
    path: '',
    component: UserlogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserlogsPageRoutingModule {}
