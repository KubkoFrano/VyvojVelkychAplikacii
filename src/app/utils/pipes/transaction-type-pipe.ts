import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    switch (value) {
      case 0:
        return 'DEBIT transaction';
      case 1:
        return 'ATM withdrawal';
      default:
        return 'Neznama transakcia';
    }
  }
}
