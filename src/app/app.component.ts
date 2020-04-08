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
    // this.service.getData().subscribe( (d) => {
    //   this.data = d;
    //   console.log(this.data);
    // });
  }

  mostrarDiv(e: any) {
    if (!e.target.checked) {
      e.target.previousSibling.textContent = 'Oculto';
      this.renderer.addClass(this.d1.nativeElement, 'smallContent');
    } else {
      e.target.previousSibling.textContent = 'Visible';
      this.renderer.removeClass(this.d1.nativeElement, 'smallContent');
    }
  }

}
