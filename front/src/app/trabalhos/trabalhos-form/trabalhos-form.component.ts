import { Component, OnInit } from '@angular/core';
import { Trabalho, TrabalhoService } from '../../services/trabalho/trabalho.service';
import { Categoria, CategoriaService } from '../../services/categoria/categoria.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-trabalhos-form',
  templateUrl: './trabalhos-form.component.html',
  styleUrls: ['./trabalhos-form.component.css'],
  providers: [TrabalhoService, CategoriaService]
})
export class TrabalhosFormComponent implements OnInit {

  private title = 'Novo trabalho'
  private model : Trabalho
  private categorias : Observable<Object>
  
  constructor(private ts: TrabalhoService, private cs: CategoriaService) {
    
  }

  ngOnInit() {
  
    this.model = new Trabalho()
    this.model.titulo = 'Teste'
    this.model.categoria = ''

    this.categorias = this.cs.listarTodos()
  
  }
  
}
