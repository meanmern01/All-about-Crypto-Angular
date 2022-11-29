import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService{
  constructor(private http : HttpClient) { }
  getCryptoStates = () => {
    let header = new HttpHeaders().set(
      "X-RapidAPI-Key" , 'ff7061690dmshfd3e9f86e03558ap172814jsne4ba9b39c8b0'
    )

    return this.http.get("https://coinranking1.p.rapidapi.com/coins?limit=100", {headers : header})
  }
  getCryptoNews = () => {
      let header = new HttpHeaders().set(
        "X-RapidAPI-Key" , 'a5187d0bbfmshd40c41bdd972b69p1c8cb0jsn5e51bf7ca41a'
      )

      return this.http.get("https://bing-news-search1.p.rapidapi.com/news/search?q=crypto", {headers : header})
    }
  }
