import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { DashboardPage } from './dashboard/dashboard.page';
import { TabsPage } from './tabs/tabs.page';

@NgModule({
  declarations: [AppComponent, LoadingScreenComponent, DashboardPage, TabsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
