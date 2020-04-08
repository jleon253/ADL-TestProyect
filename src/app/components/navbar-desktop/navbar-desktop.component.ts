import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent implements OnInit {

  menus: any = [
    {
      name: 'Tus productos',
      link: 'productos',
      detail: ''
    },
    {
      name: 'Tu organizador',
      link: 'organizador',
      detail: '¡Nuevo!'
    },
    {
      name: 'Certificados',
      link: 'certificados',
      detail: ''
    },
    {
      name: 'Seguridad',
      link: 'seguridad',
      detail: ''
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
