import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ITransaction, Transactions } from '../api/transactions';
import { TransactionTypePipe } from '../utils/pipes/transaction-type-pipe';

@Component({
  selector: 'app-basic-accounts-list',
  imports: [RouterModule, TransactionTypePipe],
  templateUrl: './basic-accounts-list.html',
  styleUrl: './basic-accounts-list.css'
})
export class BasicAccountsList implements OnInit {
  private transactionsService = inject(Transactions);
  transactionList: ITransaction[] = [];

  ngOnInit(): void {
    
    this.transactionsService.getTransactions$().subscribe((response) => {
      this.transactionList = response.data;
    })
  }
}
