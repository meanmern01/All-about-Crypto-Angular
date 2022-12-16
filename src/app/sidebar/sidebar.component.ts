import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isOpend = true
  active: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.routing()
  }
  change() {
    this.isOpend = !this.isOpend
    localStorage.setItem('sidebar', JSON.stringify(this.isOpend))
  }
  routing() {
    console.log(this.route.url)
  }
}
