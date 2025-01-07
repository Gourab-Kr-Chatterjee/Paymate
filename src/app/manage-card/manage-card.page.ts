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
  newPin?: string;
}

@Component({
  selector: 'app-manage-card',
  standalone: false,
  templateUrl: './manage-card.page.html',
  styleUrls: ['./manage-card.page.scss'],
})
export class ManageCardPage implements OnInit {
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
  activeCard: Card = this.cards[0];
  isProcessing = false;
  isPinChangeSuccessful = false;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.setActiveCard();
  }

  setActiveCard() {
    this.activeCard = this.cards.find(card => card.cardNumber === this.selectedCardNumber) || this.cards[0];
  }

  async confirmSaveSettings() {
    const alert = await this.alertController.create({
      header: 'Confirm Save',
      message: 'Are you sure you want to save these settings?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirm',
          handler: () => {
            this.saveSettings();
          }
        }
      ]
    });

    await alert.present();
  }

  saveSettings() {
    console.log('Settings saved for card:', this.activeCard);
    this.router.navigate(['/cards']);
  }

  async changePin() {
    const alert = await this.alertController.create({
      header: 'Change PIN',
      inputs: [
        {
          name: 'currentPin',
          type: 'password',
          placeholder: 'Enter current PIN',
          attributes: {
            maxlength: 4,
            inputmode: 'numeric'
          }
        },
        {
          name: 'newPin',
          type: 'password',
          placeholder: 'Enter new PIN',
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
        }, {
          text: 'Change',
          handler: async (data) => {
            if (data.currentPin === this.activeCard.currentPin) {
              this.activeCard.currentPin = data.newPin;
              this.isProcessing = true;

              setTimeout(() => {
                this.isProcessing = false;
                this.isPinChangeSuccessful = true;
              }, 2000);

              setTimeout(() => {
                this.isPinChangeSuccessful = false;
              }, 4000);
            } else {
              const errorAlert = await this.alertController.create({
                header: 'Error',
                message: 'Current PIN is incorrect.',
                buttons: ['OK']
              });
              await errorAlert.present();
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
