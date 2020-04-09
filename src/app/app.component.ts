import { Component, Renderer2, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2, private dataService: DataService) {
  }

  ngOnInit(): void {
    document.getElementById('menu-full').style.display = 'none';
  }

  hideMenuFull() {
    const m = document.getElementById('menu-full');
    m.classList.remove('showMenu');
    setTimeout(() => m.style.display = 'none', 350);
  }

}
