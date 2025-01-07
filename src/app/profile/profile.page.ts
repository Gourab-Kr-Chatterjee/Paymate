import { Component, OnInit } from '@angular/core';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  gender: string;
  hideProfile: boolean;
  showEmail: boolean;
  showPhone: boolean;
  language: string;
  notifications: boolean;
}

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isEditing = false;
  userProfile: UserProfile = {
    name: 'Gourab Chatterjee',
    email: 'gourabkr98@gmail.com',
    phone: '6299289369',
    address: 'Jamshedpur, Jharkhand, India',
    dob: '30/08/1998',
    gender: 'male',
    hideProfile: false,
    showEmail: true,
    showPhone: true,
    language: 'english',
    notifications: true,
  };

  constructor() { }

  ngOnInit() { }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  toggleProfileVisibility() {
    if (!this.userProfile.hideProfile) {
      this.userProfile.showEmail = false;
      this.userProfile.showPhone = false;
    }
  }
}
