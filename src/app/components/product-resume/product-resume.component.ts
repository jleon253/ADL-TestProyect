import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-product-resume',
  templateUrl: './product-resume.component.html',
  styleUrls: ['./product-resume.component.scss']
})
export class ProductResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var swiper = new Swiper('.swiper-container-pr', {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        // type: 'fraction',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 200,
        },
        375: {
          slidesPerView: 2,
          spaceBetween: 180,
        },
        414: {
          slidesPerView: 2,
          spaceBetween: 150,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 100,
        }
      }
    });
  }

}
