import { Component, OnInit } from '@angular/core'
import { TrabalhoService } from '../../services/trabalho/trabalho.service'
import * as moment from 'moment'

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
    this.atualizarLista()   
  }

  atualizarLista() {
    this.service.listarTodos().subscribe((dados: Response) => this.trabalhos = dados)
  }

  formatarData(data : string) {
    if(data) {
      return moment(data, 'YYYY-MM-DDThh:mm:ssZ').format('DD/MM/YYYY hh[h]mm');
    }
    else {
      return '';
    }
  }

  excluir(id: string) {
    if(confirm('Deseja realmente excluir este trabalho?')) {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista()
      )
    }
  }

  ngOnInit() {
  }

}
