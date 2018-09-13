/*              Copyright 2018 Tiago Matana

        This program is free software; you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation; either version 3 of the License, or
        (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.

        You should have received a copy of the GNU General Public License
        along with this program; if not, write to the Free Software
        Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

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

  getInscricoes(){
    var self = this;
    var promise = new Promise(function(resolve,reject) {

      self.http.get("https://tiagomatana.com/rest/view/inscricao/listar/index.php")
      .pipe(map(dados => dados.json()))
      .subscribe(dados => resolve(dados));
    });
    return promise;
  }

  deleteInscricao(inscrito){
    var self = this;
    var promise = new Promise(function(resolve){
      self.http.post("https://tiagomatana.com/rest/view/inscricao/excluir/index.php", JSON.stringify(inscrito))
        .pipe(map(dados => dados.json()))
        .subscribe(dados => resolve(dados));

    });

    return promise;

  }
}
