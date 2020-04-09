import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {

  menuvisible = false;

  constructor() { }

  ngOnInit() {
  }

  showMenuFull() {
    const m = document.getElementById('menu-full');
    m.style.display = 'flex';
    setTimeout(() => m.classList.add('showMenu'), 100);
  }


}
