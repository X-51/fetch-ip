import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  template: `Your external ip is {{ip.origin}}`,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private fetchService: FetchService) { }

  ip = {};

  fetchData() {
    this.fetchService.getData().subscribe(
      x => { 
        console.log(x);
        this.ip = x;
       }
    )
  }

  ngOnInit() {

    this.fetchData();

  }

}
