import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listhome',
  templateUrl: './listhome.component.html',
  styleUrls: ['./listhome.component.css'],
})
export class ListhomeComponent implements OnInit {
  numbers = [
    { value: 50, label: 'Müşteri' },
    { value: '3500 TL', label: 'Ciro' },
    { value: 65, label: 'Yorumlar' },
  ];

  images = [
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Şifonyer',
      description: 'Her türlü eşyanızı koyabileceğiniz şifonyer',
    },
    {
      image: '/assets/images/couch.jpeg',
      title: 'Kanepe',
      description: 'Konforlu bir koltuk',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
