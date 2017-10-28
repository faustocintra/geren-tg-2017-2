import { Component, OnInit } from '@angular/core';
import { Trabalho, TrabalhoService } from '../../services/trabalho/trabalho.service';
import { Categoria, CategoriaService } from '../../services/categoria/categoria.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-trabalhos-form',
  templateUrl: './trabalhos-form.component.html',
  styleUrls: ['./trabalhos-form.component.css'],
  providers: [TrabalhoService, CategoriaService]
})
export class TrabalhosFormComponent implements OnInit {

  private title = 'Novo trabalho'
  private model : Trabalho
  private categorias : any
  
  constructor(
    private ts: TrabalhoService, 
    private cs: CategoriaService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  
    this.model = new Trabalho()
    this.model.categoria = ''

    this.categorias = this.cs.listarTodos()

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
      params => {
        if(params['id']) {
          // Buscamos o objeto para edição
          this.ts.obterPorId(params['id']).subscribe(
            (existente: Trabalho) => this.model = existente
          )
        }
      }
    )
  
  }

  enviar() {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.ts.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à página de listagem
      () => roteador.navigate(['/trabalhos']),
      erro => console.error(erro)
    )
  }
  
}
