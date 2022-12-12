import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isOpend = true
  constructor() { }

  ngOnInit(): void {

  }
  change() {
    this.isOpend = !this.isOpend
    localStorage.setItem('sidebar', JSON.stringify(this.isOpend))
  }
}
