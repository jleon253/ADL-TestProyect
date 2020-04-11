import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper';
import { ConectorService } from '../../services/conector.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  dataBank = [];
  total = [];

  constructor(private conectService: ConectorService, private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.test();
   }

  ngOnInit() {
  }

  test() {
    this.conectService.dataBank$.subscribe( d => {
      this.total = [];
      this.dataBank = d;
      this.total = this.conectService.totalValueAccounts(this.dataBank);
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
