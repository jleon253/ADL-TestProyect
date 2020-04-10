import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper';
import { ConectorService } from '../../services/conector.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  dataBank = [];
  total = [];

  constructor(private conectService: ConectorService) {
    console.log('contructor en banner');
    this.test();
   }

  ngOnInit() {
      console.log('init en banner');
  }

  test() {
    this.conectService.dataBank$.subscribe( d => {
      console.log('emitio en banner');
      this.total = [];
      this.dataBank = d;
      this.total = this.conectService.totalValueAccounts(this.dataBank);
      console.log(this.total);
      this.initSwiper();
    });
  }

  initSwiper() {
    let swiper;
    setTimeout( () => {
      var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        // type: 'fraction',
        clickable: true,
      },
    });
    }, 700);
  }

}
