import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockCardPage } from './block-card.page';

const routes: Routes = [
  {
    path: '',
    component: BlockCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockCardPageRoutingModule {}
