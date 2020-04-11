import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectorService {

  dataBank$ = new EventEmitter<any>();
  modalCard$ = new EventEmitter<any>();

  typesAccountNames: string[] = new Array();
  totalValue: any[] = [];
  typesAccounts: any[] = [];

  constructor() { }

  /*
    Get type account names by alphabetic order
  */
  typeAccountNameOrder(dataBank: any[]) {
    this.typesAccountNames = [];
    for (const data of dataBank) {
      if (!this.typesAccountNames) {
        this.typesAccountNames.push(data['typeAccount']);
      } else {
        if (this.typesAccountNames.indexOf(data['typeAccount']) === -1) {
          this.typesAccountNames.push(data['typeAccount']);
        }
      }
    }
    this.typesAccountNames.sort();
  }

  /*
    Get the total value for every type account
  */
  totalValueAccounts(dataBank: any[]) {
    let total: number;
    let currencyCode: string;
    this.totalValue = [];
    this.typeAccountNameOrder(dataBank);
    for (const type of this.typesAccountNames) {
      total = 0;
      for (const data of dataBank) {
        if (data['typeAccount'] === type) {
          switch (data['typeAccount']) {
            case 'DEPOSIT_ACCOUNT':
              total += data['productAccountBalances']['saldo_disponible']['amount'];
              break;
            case 'CREDIT':
              // total += data['productAccountBalances']['saldo_disponible']['amount'];
              break;
            case 'CREDIT_CARD':
              total += data['productAccountBalances']['cupo_disponible_avances_pesos']['amount'];
              total += data['productAccountBalances']['cupo_disponible_compras_pesos']['amount'];
              break;
            case 'CERTIFIED_DEPOSIT_TERM':
              total += data['productAccountBalances']['valor_constitucion']['amount'];
              total += data['productAccountBalances']['intereses_causados']['amount'];
              break;
            case 'CURRENT_ACCOUNT':
              total += data['productAccountBalances']['saldo_disponible']['amount'];
              break;
            default:
              break;
          }
          currencyCode = data['accountInformation']['currencyCode'];
        }
      }
      total = Number((total).toFixed(2));
      this.totalValue.push({type, total, currencyCode});
    }
    return this.totalValue;
  }

  getAccountByType(dataBank: any[]) {
    let accounts = [];
    this.typesAccounts = [];
    this.typeAccountNameOrder(dataBank);
    for (const type of this.typesAccountNames) {
      accounts = [];
      for (const data of dataBank) {
        if (data['typeAccount'] === type) {
          accounts.push(data);
        }
      }
      this.typesAccounts.push({type, accounts});
    }
    return this.typesAccounts;
  }

  getMyDate(date: string){
    const d = new Date(date);
    const dd = d.getDate();
    const mm = d.getMonth() + 1;
    const yyyy = d.getFullYear();
    let day = '';
    let month = '';
    day = (dd < 10) ? `0${dd}` : `${dd}`;
    month = (mm < 10) ? `0${mm}` : `${mm}`;
    return `${day}/${month}/${yyyy}`;
  }

}
