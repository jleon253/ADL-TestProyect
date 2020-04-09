import { DataService } from '../../../services/data.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  nameBanks: string[] = new Array();

  constructor(private dataService: DataService) {
    this.nameBanks = dataService.namebnks;
    console.log(this.nameBanks);
  }

  ngOnInit() {}

  showBankToggle(e: any, idBank: string) {
    let b: any;
    if ((e.target.checked) && (idBank === '')) {
      document
        .querySelectorAll('.bank-section')
        .forEach((el) => el.classList.remove('hideBank'));
    } else if ((!e.target.checked) && (idBank === '')) {
      document
        .querySelectorAll('.bank-section')
        .forEach((el) => el.classList.add('hideBank'));
    } else if ((e.target.checked) && (idBank !== '')) {
      b = document.getElementById(idBank);
      b.classList.remove('hideBank');
      b.scrollIntoView();
    } else {
      b = document.getElementById(idBank);
      b.classList.add('hideBank');
    }
    if (!e.target.checked) {
      e.target.previousSibling.textContent = 'Oculto';
    } else {
      e.target.previousSibling.textContent = 'Visible';
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
