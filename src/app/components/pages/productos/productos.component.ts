import { DataService } from '../../../services/data.service';
import { ConectorService } from '../../../services/conector.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  nameBanks = [];
  typesAccounts = [];
  banks = [];
  data: any = {
    names: [],
    banks: []
  };
  titleBank = '';
  bankShow = false;
  emptyData = 'Sin datos que mostrar';

  dataModal = {};

  constructor(public dataService: DataService, private conectService: ConectorService, private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.getDataOrder();
    this.emitModal();
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
    this.emptyData = 'Cargando datos ...';
    document
      .querySelectorAll('.dropdown-item')
      .forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
    const b = document.getElementById('bankToShow');
    b.classList.add('hideBank');
    this.bankShow = false;
    
    setTimeout( () => {
      this.emptyData = '';
      this.typesAccounts = this.conectService.getAccountByType(this.dataBank(idBank));
      this.titleBank = idBank;
      this.bankShow = true;
      b.classList.remove('hideBank');
    }, 1000);
  }

  dataBank(id: string) {
    let temp = [];
    for (const bank of this.banks) {
      if (Object.keys(bank)[0] === id) {
        temp = bank[id];
        break;
      }
    }
    this.conectService.dataBank$.emit(temp);
    return temp;
  }

  emitModal() {
    this.conectService.modalCard$.subscribe( account => {
      const idModal = account['id'];
      this.dataModal = {idModal, account};
      setTimeout(() => {
        $('#' + this.dataModal['idModal']).modal('show');
      }, 200);
    });
  }

}
