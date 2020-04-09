import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  showBankToggle(e: any, idBank: string) {
    const b = document.getElementById(idBank);
    if (!e.target.checked) {
      e.target.previousSibling.textContent = 'Oculto';
      b.classList.add('hideBank');
    } else {
      e.target.previousSibling.textContent = 'Visible';
      b.classList.remove('hideBank');
      b.scrollIntoView();
    }
  }

  showBankDropdown(e: any, idBank: string) {
    document
      .querySelectorAll('.dropdown-item')
      .forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
    const listBank = document.getElementsByClassName('bank-section');
    let b: any;
    if (idBank !== '') {
      b = document.getElementById(idBank);
      for (let i = 0; i < listBank.length; i++) {
        const bank = listBank[i];
        if (bank.id !== b.id) {
          bank.classList.add('hideBank');
        } else {
          bank.classList.remove('hideBank');
        }
      }
    } else {
      document
        .querySelectorAll('.bank-section')
        .forEach((el) => el.classList.remove('hideBank'));
      window.scrollTo(0, 0);
    }
  }
}
