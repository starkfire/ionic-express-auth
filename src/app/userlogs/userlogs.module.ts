import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserlogsPageRoutingModule } from './userlogs-routing.module';

import { UserlogsPage } from './userlogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserlogsPageRoutingModule
  ],
  declarations: [UserlogsPage]
})
export class UserlogsPageModule {}
