import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalho-lista',
  templateUrl: './trabalho-lista.component.html',
  styleUrls: ['./trabalho-lista.component.css']
})
export class TrabalhoListaComponent implements OnInit {

  title = 'Trabalhos cadastrados'
  trabalhos = [
    'Aplicativo gerenciador de restaurantes',
    'Sistemas de apoio à decisão para MEI',
    'Criptografia e bitcoin',
    'Aplicativo de correção de texto'
  ]

  constructor() { }

  ngOnInit() {
  }

}
