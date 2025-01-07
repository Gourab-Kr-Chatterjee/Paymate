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
  setAlerts: boolean;
  contactlessPayments: boolean;
  currentPin?: string;
}

@Component({
  selector: 'app-block-card',
  standalone: false,
  templateUrl: './block-card.page.html',
  styleUrls: ['./block-card.page.scss'],
})
export class BlockCardPage implements OnInit {
  cards: Card[] = [
    {
      cardholderName: 'Gourab Chatterjee',
      cardNumber: '1234 5678 9012 3456',
      cvv: '123',
      showCVV: false,
      domesticTransaction: true,
      internationalTransaction: true,
      cardLimit: 50000,
      network: 'visa',
      setAlerts: false,
      contactlessPayments: true,
      currentPin: '1234' // Example current PIN
    },
    {
      cardholderName: 'Gourab Chatterjee',
      cardNumber: '9876 5432 1098 7654',
      cvv: '456',
      showCVV: false,
      domesticTransaction: true,
      internationalTransaction: false,
      cardLimit: 40000,
      network: 'mastercard',
      setAlerts: false,
      contactlessPayments: true,
      currentPin: '4567' // Example current PIN
    }
  ];
  selectedCardNumber: string = this.cards[0].cardNumber;
  pin: string = "";
  reason: string = "";
  isProcessing = false;
  isBlockSuccessful = false;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  async confirmBlockCard() {
    const alert = await this.alertController.create({
      header: 'Confirm Block',
      message: 'Are you sure you want to block this card?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirm',
          handler: () => {
            this.blockCard();
          }
        }
      ]
    });

    await alert.present();
  }

  async blockCard() {
    const selectedCard = this.cards.find(card => card.cardNumber === this.selectedCardNumber);
    if (selectedCard && this.pin === selectedCard.currentPin) {
      this.isProcessing = true;

      setTimeout(() => {
        this.isProcessing = false;
        this.isBlockSuccessful = true;
      }, 2000);

      setTimeout(() => {
        this.isBlockSuccessful = false;
        this.router.navigate(['/cards']);
      }, 4000);
    } else {
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'Incorrect PIN. Please try again.',
        buttons: ['OK']
      });
      await errorAlert.present();
    }
  }
}
