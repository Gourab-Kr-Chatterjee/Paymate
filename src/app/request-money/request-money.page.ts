import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-request-money',
  standalone: false,
  templateUrl: './request-money.page.html',
  styleUrls: ['./request-money.page.scss'],
})
export class RequestMoneyPage implements OnInit {
  requestMode: string = "";
  upiId: string = "";
  upiName: string = "";
  upiAmount: number = 0;
  bankAccountNumber: string = "";
  ifscCode: string = "";
  bankAccountHolderName: string = "";
  bankAmount: number = 0;
  message: string = "";
  isProcessing = false;
  isRequestSuccessful = false;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  async sendRequest() {
    const confirmAlert = await this.alertController.create({
      header: 'Confirm Request',
      message: 'Are you sure you want to send this request?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Send',
          handler: () => {
            this.processRequest();
          }
        }
      ]
    });

    await confirmAlert.present();
  }

  processRequest() {
    this.isProcessing = true;

    setTimeout(() => {
      this.isProcessing = false;
      this.isRequestSuccessful = true;
    }, 2000);

    setTimeout(() => {
      this.isRequestSuccessful = false;
      this.router.navigate(['/dashboard']);
    }, 4000);
  }
}
