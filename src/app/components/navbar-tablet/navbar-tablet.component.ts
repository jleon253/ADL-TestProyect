import { Component, OnInit } from '@angular/core';

import * as myMenu from '../../models/menu.model';

@Component({
  selector: 'app-navbar-tablet',
  templateUrl: './navbar-tablet.component.html',
  styleUrls: ['./navbar-tablet.component.scss']
})
export class NavbarTabletComponent implements OnInit {

  menus: any = myMenu.menuPrimary;

  constructor() { }

  ngOnInit() {
  }

}
