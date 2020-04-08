import { Component, OnInit } from '@angular/core';

import * as myMenu from '../../models/menu.model';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent implements OnInit {

  menuP: any = myMenu.menuPrimary;

  constructor() { }

  ngOnInit() {
  }

}
