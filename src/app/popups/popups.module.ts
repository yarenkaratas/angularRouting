import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopuphomeComponent } from './popuphome/popuphome.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [PopuphomeComponent, ModalComponent],
  imports: [CommonModule, PopupsRoutingModule, SharedModule],
})
export class PopupsModule {}
