import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Transactions {
  private http = inject(HttpClient)

  getTransactions$() {
    return this.http.get<{ data: ITransaction[] }>(`/api/transactions`);
  }

  getTransactionDetail$(id: string) {
    return this.http.get<{ data: ITransaction }>(`/api/transactions/${id}`);
  }
}

export interface ITransaction {
  transactionId: number,
  fullName: string,
  transactionType: number,
  accountNumber: string,
  bankCode: string,
  issueDate: Date,
  amount: number,
}