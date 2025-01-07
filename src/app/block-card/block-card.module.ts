import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockCardPageRoutingModule } from './block-card-routing.module';

import { BlockCardPage } from './block-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockCardPageRoutingModule
  ],
  declarations: [BlockCardPage]
})
export class BlockCardPageModule {}
