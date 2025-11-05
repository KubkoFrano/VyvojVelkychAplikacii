import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ITransaction, Transactions } from '../api/transactions';
import { TransactionTypePipe } from '../utils/pipes/transaction-type-pipe';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-basic-accounts-list',
  imports: [RouterModule, TransactionTypePipe, MatTableModule],
  templateUrl: './basic-accounts-list.html',
  styleUrl: './basic-accounts-list.css'
})
export class BasicAccountsList implements OnInit {
  private transactionsService = inject(Transactions);
  dataSource: ITransaction[] = [];
  displayedColumns: string[] = ['fullName', 'transactionType', 'accountNumber', 'amount', 'link'];

  ngOnInit(): void {
    
    this.transactionsService.getTransactions$().subscribe((response) => {
      this.dataSource = response.data;
    })
  }
}
