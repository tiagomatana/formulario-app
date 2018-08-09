import { Injectable, Self } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  constructor(private http: Http) { }
  addInscricao(inscricao){
    var self = this;
    var promise = new Promise(function(resolve,reject){
      self.http.post("https://tiagomatana.com/rest/view/inscricao/inserir/index.php",JSON.stringify(inscricao))
       .pipe(map(res => res))
       .subscribe(dados => {
         localStorage.setItem('subscription', String(dados.status === 200));
         resolve(true);
       });

    });
    return promise;
  }

  insert(){
    
  }


  getInscricoes(){
    this.http.get("https://tiagomatana.com/rest/view/inscricao/listar/index.php")
      .pipe(map(dados => dados.json()))
      .subscribe(dados => {
        
        return dados;
      } );
  }

  setStatus(){

  }
}
