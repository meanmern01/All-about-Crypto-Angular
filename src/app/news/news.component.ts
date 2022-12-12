import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { retry } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NewsComponent implements OnInit {
  searchData: any[] = [
    'Cryptocurrency',
  ]
  newsData: any[] = [];
  keyword: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getlist()
    this.search('Cryptocurrency')
    this.getNews()
  }
  search(keyword: any) {
    this.keyword = keyword;
    this.getNews()
  }
  getlist() {
    this.data.getCryptoStates().subscribe((data: any) => {
      data.data.coins.map((coins: any) => {
        this.searchData.push(coins.name);
      })
    })
  }
  getNews() {
    this.data.getCryptoNews(this.keyword).subscribe((data: any) => {
      console.log(data.value);
      this.newsData = data.value;
    })
  }
}
