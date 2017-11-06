import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Trabalho {
  public _id: string;
  public titulo: string;
  public aluno: string;
  public categoria: string;
  public dataBanca: Date;
  public nota: Number;
}

@Injectable()
export class TrabalhoService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/trabalhos');
  }

  public obterPorId(id: string) {
    return this.http.get('http://localhost:3000/trabalhos/' + id)
  }

  public salvar(t: Trabalho) {

    // Atualiza objeto já existente
    if(t._id) {
      return this.http.post('http://localhost:3000/trabalhos', t)
    }
    // Inserção de novo objeto
    else {
      return this.http.put('http://localhost:3000/trabalhos', t)
    }

  }

  public excluir(id: string) {
    return this.http.delete('http://localhost:3000/trabalhos/' + id)
  }

}
