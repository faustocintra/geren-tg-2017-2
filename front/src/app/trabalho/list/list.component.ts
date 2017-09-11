import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  trabalhos = []

  constructor(http: Http) { 
    http.get('http://localhost:3000/trabalhos')
      .subscribe(function(trabalhos) {
        this.trabalhos = trabalhos
      })
       
  }

  ngOnInit() {
  }

}
