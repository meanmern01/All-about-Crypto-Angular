import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcurruncy',
  templateUrl: './allcurruncy.component.html',
  styleUrls: ['./allcurruncy.component.css']
})
export class AllcurruncyComponent implements OnInit {
  crypto: any;
  isLoading: boolean;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCrypto()
  }
  getAllCrypto() {
    this.isLoading = true;
    setTimeout(() => {
      this.data.getCryptoStates().subscribe((crypto: any) => {
        this.crypto = crypto.data.coins;
      })
      this.isLoading = false;
    }, 5000)
  }
  detailCurruncy(id: any) {
    console.log(id);
    this.router.navigate([`/crypto/${id}`])
  }

}
