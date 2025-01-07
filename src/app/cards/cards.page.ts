import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  cards: Card[] = [
    {
      cardholderName: 'Gourab Chatterjee',
      cardNumber: '1234 5678 9012 3456',
      cvv: '123',
      showCVV: false,
      domesticTransaction: true,
      internationalTransaction: true,
      cardLimit: 50000,
      network: 'visa'
    },
    {
      cardholderName: 'Gourab Chatterjee',
      cardNumber: '9876 5432 1098 7654',
      cvv: '456',
      showCVV: false,
      domesticTransaction: true,
      internationalTransaction: false,
      cardLimit: 40000,
      network: 'mastercard'
    }
  ];
  activeCard: Card = this.cards[0];
  selectedCard: Card | null = null;
  showSuccess = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('CardsPage initialized.');
    console.log('Active Card:', this.activeCard);
  }

  toggleCVV() {
    this.activeCard.showCVV = !this.activeCard.showCVV;
  }

  toggleCard() {
    this.activeCard = this.activeCard === this.cards[0] ? this.cards[1] : this.cards[0];
    console.log('Active Card toggled:', this.activeCard);
  }

  showServices() {
    this.selectedCard = this.activeCard;
  }

  hideServices() {
    this.selectedCard = null;
  }

  saveServices() {
    this.selectedCard = null;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }

  openPayBillForm() {
    this.router.navigate(['/pay-bill']);
  }

  manageCardSettings() {
    this.router.navigate(['/manage-card']);
  }

  blockCard() {
    this.router.navigate(['/block-card']);
  }

  viewOffers() {
    this.router.navigate(['/offers']);
  }
}
