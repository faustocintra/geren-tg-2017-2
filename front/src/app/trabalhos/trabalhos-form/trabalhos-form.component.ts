import { Component, OnInit, OnChanges } from '@angular/core';
import { Trabalho, TrabalhoService } from '../../services/trabalho/trabalho.service';
import { Categoria, CategoriaService } from '../../services/categoria/categoria.service'

@Component({
  selector: 'app-trabalhos-form',
  templateUrl: './trabalhos-form.component.html',
  styleUrls: ['./trabalhos-form.component.css'],
  providers: [TrabalhoService, CategoriaService]
})
export class TrabalhosFormComponent implements OnInit, OnChanges {

  private title = 'Novo trabalho'
  private model : Trabalho
  private categorias : Categoria[] = [
    {_id: '1', descricao: 'Teste 1'},
    { _id: '2', descricao: 'Teste 2' }
  ]
    
  
  constructor(private service: TrabalhoService, private catService: CategoriaService) {
    console.log(this.carregarCategorias())
  }

  ngOnChanges() {
    
  }
 
  ngOnInit() {
  
    this.model = new Trabalho()
    this.model.titulo = 'Teste'
    
  
  }

  carregarCategorias() {
    this.catService.listarTodos().subscribe(
      function(dados: Categoria[]) {
        console.log('Categorias:')
        this.categorias = dados;
        console.log(this.categorias)
        return dados
      },
      function(erro) {
        console.error(erro.message);
      }
    )
  }

}
