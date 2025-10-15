import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ITransaction, Transactions } from '../../api/transactions';
import { TransactionTypePipe } from '../../utils/pipes/transaction-type-pipe';

@Component({
  selector: 'app-basic-detail',
  imports: [RouterModule, TransactionTypePipe],
  templateUrl: './basic-detail.html',
  styleUrl: './basic-detail.css'
})
export class BasicDetail implements OnInit {
  userId: string | null = null;
  private transactionsService = inject(Transactions);
  transaction: ITransaction | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.transactionsService.getTransactionDetail$(this.userId?.toString()).subscribe((response) => {
      this.transaction = response.data;
      
})
  }
}
