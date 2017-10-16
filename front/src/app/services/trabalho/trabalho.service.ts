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

}
