import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    // Simulate a loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // 3 seconds
  }
}