import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataset, ChartOptions, Chart } from 'chart.js';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
  chart: any;
  param: any;
  fData: any[];
  time_Per: string;
  coinData: any[] = [];
  isLoading: boolean = false;
  constructor(private data: DataService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getValue('7d')

  }
  getValue(val?: any) {
    this.isLoading = true;
    console.log("value", val);
    this.getCryptoData(val)
  }
  getCryptoData(time_Per: any) {
    this.isLoading = true;
    this.param = this.route.snapshot.paramMap.get('id')
    this.data.getCoinHistory(this.param, time_Per).subscribe((data: any) => {
      console.log("param: ", data.data);
      const coinPrice = [];
      const coinTimestamp = [];

      for (let i = 0; i < data?.data?.history?.length; i += 1) {
        coinPrice.push(data?.data?.history[i].price);
      }

      for (let i = 0; i < data?.data?.history?.length; i += 1) {
        coinTimestamp.push(
          new Date(data?.data?.history[i].timestamp).toLocaleDateString()
        );
      }
      setTimeout(() => {
        this.showChart(coinTimestamp, coinPrice)
        this.isLoading = false;
      }, 1000)

    })
    this.getCoin()
  }
  showChart(coinTimestamp: any[], coinPrice: any[]) {
    this.isLoading = true;
    const canvas = <HTMLCanvasElement>document.getElementById('MyChart');
    const ctx = canvas.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: coinTimestamp,
        datasets: [
          {
            label: "Price In USD",
            data: coinPrice,
            fill: false,
            backgroundColor: "#0B84A5",
            pointBackgroundColor: 'green',
            borderColor: "#F6C85F",
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  getCoin() {
    this.isLoading = true;
    this.data.getCoin(this.param).subscribe((data: any) => {
      this.coinData.push(data.data.coin)
      console.log(this.coinData);
      this.isLoading = false;
    })
  }
}
