import { Component, OnInit } from '@angular/core'
import { TrabalhoService } from '../../services/trabalho/trabalho.service'

@Component({
  selector: 'app-trabalhos-lista',
  templateUrl: './trabalhos-lista.component.html',
  styleUrls: ['./trabalhos-lista.component.css'],
  providers: [ TrabalhoService ]
})
export class TrabalhosListaComponent implements OnInit {

  private trabalhos : any
  private title = 'Lista de Trabalhos'
  
  constructor(private service: TrabalhoService) { 
    this.service.listarTodos().subscribe((dados : Response) => this.trabalhos = dados)
  }

  ngOnInit() {
  }

}
