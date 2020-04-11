import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any = [];
  dataOrder: any = {
    names: [],
    banks: []
  };
  namebnks: string[] = new Array();
  bnk1: any[] = new Array();
  bnk2: any[] = new Array();
  bnk3: any[] = new Array();
  bnk4: any[] = new Array();

  constructor(private http: HttpClient) {
    console.log('Ready service');
    this.getData();
  }

  async getData() {
    this.data = await this.http.get<any>('assets/data/data-valid.json').toPromise();
    this.getNameBanks(this.orderByBanks(this.data.product));
  }

  orderByBanks(products: any[]): any[] {
    const nameBanks = [];
    for (const product of products) {
      nameBanks.push(product.accountInformation.bank);
      switch (product.accountInformation.bank) {
        case 'BANCO_1':
          this.bnk1.push(product);
          break;
        case 'BANCO_2':
          this.bnk2.push(product);
          break;
        case 'BANCO_3':
          this.bnk3.push(product);
          break;
        case 'BANCO_4':
          this.bnk4.push(product);
          break;
        default:
          break;
      }
    }
    this.dataOrder.banks.push({BANCO_1: this.bnk1});
    this.dataOrder.banks.push({BANCO_2: this.bnk2});
    this.dataOrder.banks.push({BANCO_3: this.bnk3});
    this.dataOrder.banks.push({BANCO_4: this.bnk4});
    return nameBanks;
  }

  getNameBanks(names: any[]) {
    for (const bank of names) {
      if (!this.namebnks) {
        this.namebnks.push(bank);
      } else {
        if (this.namebnks.indexOf(bank) === -1) { //no exist
          this.namebnks.push(bank);
        }
      }
    }
    this.namebnks.sort();
    this.dataOrder.names.push(this.namebnks);
  }

  getNameBnks() {
    return this.namebnks;
  }

  getDataOrder() {
    return this.dataOrder;
  }
}
