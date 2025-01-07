import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-card',
  standalone: false,
  templateUrl: './add-card.page.html',
  styleUrls: ['./add-card.page.scss'],
})
export class AddCardPage implements OnInit {
  cardNumber: string="";
  cardHolderName: string="";
  cvv: string="";
  expiryMonth: number=0;
  expiryYear: number=0;
  cardType: string="";
  isProcessing = false;
  isCardAddedSuccessfully = false;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  onCardNumberChange() {
    if (this.cardNumber.startsWith('4')) {
      this.cardType = 'visa';
    } else if (this.cardNumber.startsWith('5')) {
      this.cardType = 'mastercard';
    } else {
      this.cardType = '';
    }
  }

  async confirmCardDetails() {
    const alert = await this.alertController.create({
      header: 'Confirm PIN',
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
          text: 'Add Card',
          handler: async (data) => {
            const pin = data.cardPin;
            this.processCardDetails(pin);
          }
        }
      ]
    });

    await alert.present();
  }

  async processCardDetails(pin: string) {
    this.isProcessing = true;

    setTimeout(() => {
      this.isProcessing = false;
      this.isCardAddedSuccessfully = true;
    }, 2000);

    setTimeout(() => {
      this.isCardAddedSuccessfully = false;
      this.router.navigate(['/dashboard']);
    }, 4000);
  }
}
