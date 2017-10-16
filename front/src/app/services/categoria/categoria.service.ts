import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Categoria {
  public _id: string;
  public descricao: string;
}

@Injectable()
export class CategoriaService {

  constructor(private http: HttpClient) { }

  listarTodos() {
    return this.http.get('http://localhost:3000/categorias')
  }

}
