import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  @ViewChild('d1', {static: false}) d1: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  showBank(e: any) {
    if (!e.target.checked) {
      console.log('checkeado')
      e.target.previousSibling.textContent = 'Oculto';
      this.renderer.addClass(this.d1.nativeElement, 'hideBank');
    } else {
      console.log('no checkeado')
      e.target.previousSibling.textContent = 'Visible';
      this.renderer.removeClass(this.d1.nativeElement, 'hideBank');
    }
  }

}
