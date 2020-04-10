import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectorService {

  dataBank$ = new EventEmitter<any>();

  typesAccount: string[] = new Array();
  totalValue: any[] = [];

  constructor() { }

  /*
    Get type account names by alphabetic order
  */
  typeAccountNameOrder(dataBank: any[]) {
    this.typesAccount = [];
    for (const data of dataBank) {
      if (!this.typesAccount) {
        this.typesAccount.push(data['typeAccount']);
      } else {
        if (this.typesAccount.indexOf(data['typeAccount']) === -1) {
          this.typesAccount.push(data['typeAccount']);
        }
      }
    }
    this.typesAccount.sort();
  }

  /*
    Get the total value for every type account
  */
  totalValueAccounts(dataBank: any[]) {
    let total: number;
    let currencyCode: string;
    this.totalValue = [];
    this.typeAccountNameOrder(dataBank);
    for (const type of this.typesAccount) {
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



}
