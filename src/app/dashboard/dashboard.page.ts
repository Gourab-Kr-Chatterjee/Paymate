import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  transactions = [
    { name: 'Grocery Store', date: '2024-12-19', amount: '123.45', type: 'debit' },
    { name: 'Online Shopping', date: '2024-12-18', amount: '67.89', type: 'debit' },
    { name: 'Salary', date: '2024-12-17', amount: '25000.00', type: 'credit' },
    // More transactions...
  ];

  showBalance: boolean = false;
  authenticated: boolean = false;

  constructor(private router : Router) { }

  ngOnInit() {}

  toggleCard() {
    this.showBalance = !this.showBalance;
  }

  authenticate() {
    this.authenticated = true;
  }

  sendMoney() { 
    this.router.navigate(['/send-money']); 
  }

  RequestMoney() { 
    this.router.navigate(['/request-money']); 
  }

  addCard() { 
    this.router.navigate(['/add-card']); 
  }
}
