import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Card {
  cardholderName: string;
  cardNumber: string;
  cvv: string;
  showCVV: boolean;
  domesticTransaction: boolean;
  internationalTransaction: boolean;
  cardLimit: number;
  network: string;
}

@Component({
  selector: 'app-pay-bill',
  standalone: false,
  templateUrl: './pay-bill.page.html',
  styleUrls: ['./pay-bill.page.scss'],
})
export class PayBillPage implements OnInit {
  activeCard: Card = {
    cardholderName: 'John Doe',
    cardNumber: '1234 5678 9012 3456',
    cvv: '123',
    showCVV: false,
    domesticTransaction: true,
    internationalTransaction: true,
    cardLimit: 50000,
    network: 'visa'
  };
  dueAmount = '5000.00'; // Example due amount
  paymentAmount: number = 0;
  isProcessing = false;
  isPaymentSuccessful = false;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    console.log('PayBillPage initialized.');
  }

  async confirmPayment() {
    const alert = await this.alertController.create({
      header: 'Confirm Payment',
      message: `Are you sure you want to pay ₹${this.paymentAmount}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirm',
          handler: () => {
            this.payBillAmount();
          }
        }
      ]
    });

    await alert.present();
  }

  payBillAmount() {
    this.isProcessing = true;

    setTimeout(() => {
      this.isProcessing = false;
      this.isPaymentSuccessful = true;
    }, 2000); // Simulate a delay for processing payment

    setTimeout(() => {
      this.isPaymentSuccessful = false;
      this.router.navigate(['/cards']);
    }, 4000); // Navigate back to cards page after showing success
  }
}
