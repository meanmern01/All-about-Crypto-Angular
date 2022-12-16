import { Router } from '@angular/router';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }
  cryptoHistory: any = '';
  topCrypto: any = '';
  cryptoNews: any = '';
  isLoading: boolean = false;
  title = 'crypto-task';
  isCollpse: boolean = false;
  ngOnInit() {
    this.isLoading = true;
    this.getCryptoStates()
    this.getCryptoNews()
  }
  getCryptoStates() {
    this.isLoading = true;
    this.data.getCryptoStates().subscribe((data: any) => {
      this.cryptoHistory = data.data.stats
      this.topCrypto = data.data.coins.splice(0, 10)
      this.isLoading = false
    })
  }
  getCryptoNews() {
    this.isLoading = true
    this.data.getCryptoNews('crypto').subscribe((data: any) => {

      this.cryptoNews = data.value.splice(0, 6)
      console.log(this.cryptoNews);
      this.isLoading = false

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
  detailCurruncy(id: any) {
    console.log(id);
    this.router.navigate([`/crypto/${id}`])
  }

}
