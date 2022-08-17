import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data = [
    {
      name: 'Yaren',
      age: 23,
      job: 'Elektrik Elektronik Mühendisi',
      employed: 'Hayır',
    },
    { name: 'Osman', age: 23, job: 'Yazılım Mühendisi', employed: 'Hayır' },
    { name: 'Elif', age: 23, job: 'İşletme Mühendisi', employed: 'Evet' },
  ];
  headers = [
    { key: 'employed', label: 'Aldığı ücretten memnun mu?' },
    { key: 'name', label: 'Ad Soyad' },
    { key: 'age', label: 'Yaş' },
    { key: 'job', label: 'Meslek' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
