import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ITransaction, Transactions } from '../../api/transactions';
import { TransactionTypePipe } from '../../utils/pipes/transaction-type-pipe';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-basic-detail',
  imports: [RouterModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatInputModule],
  templateUrl: './basic-detail.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './basic-detail.css'
})
export class BasicDetail implements OnInit {
  userId: string | null = null;
  private transactionsService = inject(Transactions);
  transaction: ITransaction | null = null;

  transactionForm = new FormGroup({
    accountNumberField: new FormControl(''),
    amountField: new FormControl(0),
    dateField: new FormControl('')
  });
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.transactionsService.getTransactionDetail$(this.userId?.toString()).subscribe((response) => {
      this.transaction = response.data;
      this.transactionForm = new FormGroup({
        accountNumberField: new FormControl(response.data.accountNumber),
        amountField: new FormControl(response.data.amount),
        dateField: new FormControl(response.data.issueDate.toString())
      });
    })

  }
}
