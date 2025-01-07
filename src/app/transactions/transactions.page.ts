import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-transactions',
  standalone: false,
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  dateRange = {
    start: new Date(new Date().setDate(1)).toISOString().split('T')[0], // First day of the current month
    end: new Date().toISOString().split('T')[0] // Current date
  };
  totalCredit: number = 0;
  totalDebit: number = 0;
  transactions = [
    { name: 'Grocery Store', date: '2024-12-19', amount: '423.45', type: 'debit', method: 'Card', methodIcon: 'card-outline', transferId: 'TXN1234567890' },
    { name: 'Online Shopping', date: '2024-12-18', amount: '167.89', type: 'debit', method: 'PayPal', methodIcon: 'logo-paypal', transferId: 'TXN9876543210' },
    { name: 'Salary', date: '2024-12-17', amount: '25000.00', type: 'credit', method: 'Bank Transfer', methodIcon: 'cash-outline', transferId: 'TXN1122334455' },
    // Additional hardcoded transactions for better visuals and testing
    { name: 'Electricity Bill', date: '2024-12-16', amount: '350.00', type: 'debit', method: 'Card', methodIcon: 'card-outline', transferId: 'TXN5566778899' },
    { name: 'Restaurant', date: '2024-12-15', amount: '200.00', type: 'debit', method: 'Google Pay', methodIcon: 'logo-google', transferId: 'TXN6677889900' },
    { name: 'Freelance Work', date: '2024-12-14', amount: '700.00', type: 'credit', method: 'PayPal', methodIcon: 'logo-paypal', transferId: 'TXN7788990011' },
    { name: 'Water Bill', date: '2024-12-13', amount: '150.00', type: 'debit', method: 'Cash', methodIcon: 'cash-outline', transferId: 'TXN8899001122' },
    { name: 'Gym Membership', date: '2024-12-12', amount: '100.00', type: 'debit', method: 'Card', methodIcon: 'card-outline', transferId: 'TXN9900112233' },
    { name: 'Grocery Store', date: '2024-12-11', amount: '225.45', type: 'debit', method: 'Apple Pay', methodIcon: 'logo-apple', transferId: 'TXN0011223344' },
    { name: 'Online Shopping', date: '2024-12-10', amount: '275.89', type: 'debit', method: 'Card', methodIcon: 'card-outline', transferId: 'TXN1122334466' },
    { name: 'Bonus', date: '2024-12-09', amount: '1200.00', type: 'credit', method: 'Bank Transfer', methodIcon: 'cash-outline', transferId: 'TXN2233445566' },
    { name: 'Insurance', date: '2024-12-08', amount: '340.00', type: 'debit', method: 'PayPal', methodIcon: 'logo-paypal', transferId: 'TXN3344556677' },
    { name: 'Interest', date: '2024-12-07', amount: '50.70', type: 'credit', method: 'Bank Transfer', methodIcon: 'cash-outline', transferId: 'TXN4455667788' },
    { name: 'Donation', date: '2024-12-06', amount: '100.00', type: 'debit', method: 'Google Pay', methodIcon: 'logo-google', transferId: 'TXN5566778899' },
    { name: 'Pet Supplies', date: '2024-12-05', amount: '60.00', type: 'debit', method: 'Card', methodIcon: 'card-outline', transferId: 'TXN6677889900' },
  ];
  filteredTransactions = this.transactions;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.filterTransactions();
  }

  filterTransactions() {
    const startDate = new Date(this.dateRange.start);
    const endDate = new Date(this.dateRange.end);
    this.filteredTransactions = this.transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= startDate && transactionDate <= endDate;
    });
    this.calculateTotals();
  }

  calculateTotals() {
    this.totalCredit = this.filteredTransactions
      .filter(transaction => transaction.type === 'credit')
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
    this.totalDebit = this.filteredTransactions
      .filter(transaction => transaction.type === 'debit')
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  }

  async showInfo() {
    const alert = await this.alertController.create({
      header: 'Transaction Insights',
      message: 'Here are some insights about your transactions...',
      buttons: ['OK']
    });
    await alert.present();
  }
}
