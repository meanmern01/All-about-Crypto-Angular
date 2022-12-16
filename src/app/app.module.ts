import { initializeApp } from 'firebase/app';
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
import { NgChartsModule } from 'ng2-charts';
import { ExchangeComponent } from './exchange/exchange.component';
import { FooterComponent } from './footer/footer.component';
import { DateAgoPipe } from './utils/date-ago.pipe';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NumberSuffixPipe,
    SidebarComponent,
    HomeComponent,
    AllcurruncyComponent,
    CryptoComponent,
    ExchangeComponent,
    FooterComponent,
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
