import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var swiper = new Swiper('.swiper-container', {
      // slidesPerView: 1,
      // spaceBetween: 15,
      // centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
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
  }

}
