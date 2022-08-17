import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopuphomeComponent } from './popuphome/popuphome.component';

const routes: Routes = [{ path: '', component: PopuphomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupsRoutingModule {}
