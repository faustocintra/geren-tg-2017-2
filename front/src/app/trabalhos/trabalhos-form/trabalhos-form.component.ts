import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalhos-form',
  templateUrl: './trabalhos-form.component.html',
  styleUrls: ['./trabalhos-form.component.css']
})
export class TrabalhosFormComponent implements OnInit {

  private title = 'Novo trabalho'
  
  constructor() { }

  ngOnInit() {
  }

}
