import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListhomeComponent } from './listhome/listhome.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [ListhomeComponent, ListComponent, ItemListComponent],
  imports: [CommonModule, ListsRoutingModule, SharedModule],
})
export class ListsModule {}
