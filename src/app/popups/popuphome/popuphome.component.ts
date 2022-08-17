import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popuphome',
  templateUrl: './popuphome.component.html',
  styleUrls: ['./popuphome.component.css'],
})
export class PopuphomeComponent implements OnInit {
  modalOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
