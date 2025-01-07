import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Card {
  cardholderName: string;
  cardNumber: string;
  currentPin?: string;
}

@Component({
  selector: 'app-send-money',
  standalone: false,
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
})
export class SendMoneyPage implements OnInit {
  amount: number = 0;
  paymentMode: string = "";
  selectedCardNumber: string = "";
  cards: Card[] = [
    {
      cardholderName: 'Gourab Chatterjee',
      cardNumber: '1234 5678 9012 3456',
      currentPin: '1234'
    },
    {
      cardholderName: 'Gourab Chatterjee',
      cardNumber: '9876 5432 1098 7654',
      currentPin: '4567'
    }
  ];
  isProcessing = false;
  isPaymentSuccessful = false;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  async confirmPayment() {
    let pin;
    if (this.paymentMode === 'upi') {
      const alert = await this.alertController.create({
        header: 'Enter UPI PIN',
        inputs: [
          {
            name: 'upiPin',
            type: 'password',
            placeholder: 'Enter UPI PIN',
            attributes: {
              maxlength: 4,
              inputmode: 'numeric'
            }
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
          },
          {
            text: 'Pay',
            handler: async (data) => {
              pin = data.upiPin;
              this.processPayment(pin);
            }
          }
        ]
      });

      await alert.present();
    } else if (this.paymentMode === 'card') {
      const alert = await this.alertController.create({
        header: 'Enter Card PIN',
        inputs: [
          {
            name: 'cardPin',
            type: 'password',
            placeholder: 'Enter Card PIN',
            attributes: {
              maxlength: 4,
              inputmode: 'numeric'
            }
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
          },
          {
            text: 'Pay',
            handler: async (data) => {
              pin = data.cardPin;
              this.processPayment(pin);
            }
          }
        ]
      });

      await alert.present();
    }
  }

  async processPayment(pin: string) {
    this.isProcessing = true;

    setTimeout(() => {
      this.isProcessing = false;
      this.isPaymentSuccessful = true;
    }, 2000);

    setTimeout(() => {
      this.isPaymentSuccessful = false;
      this.router.navigate(['/dashboard']);
    }, 4000);
  }
}
