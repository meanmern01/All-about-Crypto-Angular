import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data : DataService) {}
  cryptoHistory : any =  '';
  topCrypto: any = '';
  cryptoNews : any = '';

  title = 'crypto-task';
  ngOnInit(){
    this.getCryptoStates()
    this.getCryptoNews()
  }
  getCryptoStates(){
    this.data.getCryptoStates().subscribe((data : any) => {
      this.cryptoHistory = data.data.stats
      this.topCrypto = data.data.coins.splice(0,10)


    })
  }
  getCryptoNews() {
    this.data.getCryptoNews().subscribe((data : any) => {

      this.cryptoNews = data.value.splice(0,6)
      console.log(this.cryptoNews);
    })
  }

}
