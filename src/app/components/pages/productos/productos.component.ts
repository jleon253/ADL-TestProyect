import { DataService } from '../../../services/data.service';
import { ConectorService } from '../../../services/conector.service';
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

  nameBanks = [];
  banks = [];
  data: any = {
    names: [],
    banks: []
  };
  titleBank = '';
  bankShow = false;

  constructor(public dataService: DataService, private conectService: ConectorService) {
    this.getDataOrder();
  }

  ngOnInit() {
  }

  dataOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataService.getDataOrder());
        reject('Fallo obtener getDataOrder()');
      }, 500);
    });
  }

  async getDataOrder() {
    await this.dataOrder().then( (response) => {
      this.data.names = response['names'];
      this.data.banks = response['banks'];
    }, (error) => {
      console.log(error);
    });
    this.nameBanks = this.data.names[0];
    this.banks = this.data.banks;
  }

  showBankDropdown(e: any, idBank: string) { 
    document
      .querySelectorAll('.dropdown-item')
      .forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
    const b = document.getElementById('bankToShow');
    b.classList.add('hideBank');
    setTimeout( () => {
      this.titleBank = idBank;
      this.bankShow = true;
      this.dataBank(idBank);
      b.classList.remove('hideBank');
    }, 1000);
  }

  dataBank(id: string) {
    let temp = {};
    for (const bank of this.banks) {
      if (Object.keys(bank)[0] === id) {
        temp = bank[id];
        break;
      }
    }
    console.log('emitiendo desde productos');
    this.conectService.dataBank$.emit(temp);
  }

}
