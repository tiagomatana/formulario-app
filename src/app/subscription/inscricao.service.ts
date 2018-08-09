import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class InscricaoService {
  status: boolean;
  constructor(private http: Http) { }


  getNome(){
    return "Tiago Matana";
  }

  addInscricao(inscricao){
    console.log(inscricao)
    this.http.post("https://tiagomatana.com/rest/view/inscricao/inserir/index.php",JSON.stringify(inscricao))
      .pipe(map(res => res))
      .subscribe(dados => this.status = dados.status == 200);
      console.log(this.status)
    return this.status;
  
  }

  getInscricoes(){
    this.http.get("https://tiagomatana.com/rest/view/inscricao/listar/index.php")
      .pipe(map(dados => dados.json()))
      .subscribe(dados => console.log(dados));
  }
}
