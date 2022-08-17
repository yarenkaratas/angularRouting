import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListhomeComponent } from './listhome/listhome.component';

const routes: Routes = [{ path: '', component: ListhomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule {}
