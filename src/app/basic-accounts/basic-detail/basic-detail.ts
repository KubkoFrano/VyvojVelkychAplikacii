import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic-detail',
  imports: [RouterModule],
  templateUrl: './basic-detail.html',
  styleUrl: './basic-detail.css'
})
export class BasicDetail implements OnInit {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
