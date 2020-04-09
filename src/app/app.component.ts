import { Component, Renderer2, OnInit, ViewChild, ElementRef } from '@angular/core';

import Swiper from 'swiper';

import { MyService } from './services/my.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'proyectADL';
  data: any = [];

  @ViewChild('d1', {static: false}) d1: ElementRef;

  constructor(private renderer: Renderer2, private service: MyService) {
  }

  ngOnInit(): void {
    document.getElementById('menu-full').style.display = 'none';
    // this.service.getData().subscribe( (d) => {
    //   this.data = d;
    //   console.log(this.data);
    // });
  }

  hideMenuFull() {
    console.log('chao menu');
    const m = document.getElementById('menu-full');
    m.classList.remove('showMenu');
    setTimeout(() => m.style.display = 'none', 350);
  }

}
