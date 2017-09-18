import { Component, OnInit } from '@angular/core'

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-trabalhos-lista',
  templateUrl: './trabalhos-lista.component.html',
  styleUrls: ['./trabalhos-lista.component.css']
})
export class TrabalhosListaComponent implements OnInit {

  private trabalhos
  private title = 'Lista de Trabalhos'
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/trabalhos')
      .subscribe(dados => this.trabalhos = dados)
  }

  ngOnInit() {
  }

}
