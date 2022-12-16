import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private data: DataService, private router: Router) { }
  cryptoHistory: any = '';
  topCrypto: any = ''

  title = 'crypto-task';
  ngOnInit() {
    this.getCryptoStates()
    console.log(this.router.url)
  }
  getCryptoStates() {
    this.data.getCryptoStates().subscribe((data: any) => {
      console.log(data.data.coins);
      this.cryptoHistory = data.data.stats
      this.topCrypto = data.data.coins.splice(0, 10)

      console.log(this.topCrypto);

    })
  }
}
