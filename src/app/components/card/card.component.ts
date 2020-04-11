import { Component, OnInit, Input } from '@angular/core';
import { ConectorService } from '../../services/conector.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() accountInfo: any;

  productType: string;
  accountId: string;

  labelDescription: string;
  valueDescription: string;

  showColumn = false;
  labelDetailC1: string;
  valueDetailC1: string;
  labelDetailC2: string;
  valueDetailC2: string;

  showRow = false;
  labelDetailR1: string;
  valueDetailR1: string;
  labelDetailR2: string;
  valueDetailR2: string;

  showButton = false;
  showProgress = false;
  labelProgress: string;
  valueProgress: number;

  constructor(private conectService: ConectorService) { }

  ngOnInit() {
    this.getInfoAccount();
    this.getInfoByType();
  }

  getInfoAccount() {
    this.productType = this.accountInfo['accountInformation']['productType'];
    this.accountId = this.accountInfo['accountInformation']['accountIdentifier'];
  }

  getInfoByType() {
    switch (this.accountInfo['typeAccount']) {
      case 'DEPOSIT_ACCOUNT':
        this.labelDescription = 'Saldo disponible:';
        this.valueDescription = '$ ' + this.accountInfo['productAccountBalances']['saldo_disponible']['amount'];
        this.showRow = true;
        this.labelDetailR1 = 'En bolsillos:';
        this.valueDetailR1 = '$ ' + this.accountInfo['productAccountBalances']['saldo_canje']['amount'];
        this.labelDetailR2 = 'Saldo total:';
        this.valueDetailR2 = '$ ' + this.accountInfo['productAccountBalances']['saldo_actual']['amount'];
        break;
      case 'CREDIT':
        this.showButton = true;
        break;
      case 'CREDIT_CARD':
        const saldoActual = this.accountInfo['productAccountBalances']['saldo_actual']['amount'];
        const valorTotal = this.accountInfo['productAccountBalances']['cupo_total']['amount'];

        this.labelDescription = 'Cupo disponible:';
        this.valueDescription = '$ ' + saldoActual;
        this.showColumn = true;
        this.labelDetailC1 = 'Fecha de corte:';
        this.valueDetailC1 = this.conectService.getMyDate(this.accountInfo['dueDate']);
        this.labelDetailC2 = 'Pago total:';
        this.valueDetailC2 = '$ ' + this.accountInfo['productAccountBalances']['pago_total_pesos']['amount'] + ' COP';
        this.showProgress = true;
        this.labelProgress = 'Total gastado: $ ' + this.getExpenses(saldoActual, valorTotal);
        break;
      case 'CERTIFIED_DEPOSIT_TERM':
        this.labelDescription = 'Valor invertido:';
        this.valueDescription = '$ ' + this.accountInfo['productAccountBalances']['valor_constitucion']['amount'];
        this.showColumn = true;
        this.labelDetailC1 = 'Plazo:';
        this.valueDetailC1 = this.accountInfo['term']['count'] + ' ' + this.accountInfo['term']['units'];
        this.labelDetailC2 = 'Fecha de vencimiento:';
        this.valueDetailC2 = this.conectService.getMyDate(this.accountInfo['dueDate']);
        break;
      case 'CURRENT_ACCOUNT':
        this.labelDescription = 'Saldo disponible:';
        this.valueDescription = '$ ' + this.accountInfo['productAccountBalances']['saldo_disponible']['amount'];
        this.showRow = true;
        this.labelDetailR1 = 'Días en sobregiro:';
        this.valueDetailR1 = this.accountInfo['overDraftDays'];
        break;
      default:
        break;
    }
  }

  

  getExpenses(currentBalance: string, totalValue: string){
    this.valueProgress = 0;
    const cb = parseFloat(currentBalance);
    const tv = parseFloat(totalValue);
    const e = tv - cb;
    this.valueProgress = this.getPercentExpenses(e, tv);
    return e;
  }

  getPercentExpenses(expenses: number, total: number) {
    return (expenses / total) * 100;
  }

  emitModal() {
    this.conectService.modalCard$.emit(this.accountInfo);
  }

}
