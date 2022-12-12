import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }
  cryptoHistory: any = '';
  topCrypto: any = '';
  cryptoNews: any = '';
  isLoading: boolean = false;
  title = 'crypto-task';
  isCollpse: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.getCryptoStates()
      this.getCryptoNews()
    }, 4995)
    this.collapsed()
    console.log("lofds")
  }
  getCryptoStates() {
    this.data.getCryptoStates().subscribe((data: any) => {
      this.cryptoHistory = data.data.stats
      this.topCrypto = data.data.coins.splice(0, 10)
    })
  }
  getCryptoNews() {
    this.data.getCryptoNews('crypto').subscribe((data: any) => {

      this.cryptoNews = data.value.splice(0, 6)
      console.log(this.cryptoNews);
    })
  }
  collapsed() {
    console.log("callinf");

    let temp = localStorage.getItem('sidebar')
    if (temp === 'true') {
      return true
    } else {
      return false
    }
  }
}
