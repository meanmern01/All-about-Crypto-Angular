//@ts-nocheck
import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberSuffixPipe } from './utils/number-suffix.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AllcurruncyComponent } from './allcurruncy/allcurruncy.component';
import { NewsComponent } from './news/news.component';
import { CryptoComponent } from './crypto/crypto.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberSuffixPipe,
    SidebarComponent,
    HomeComponent,
    AllcurruncyComponent,
    NewsComponent,
    CryptoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
