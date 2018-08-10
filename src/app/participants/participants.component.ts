import { Component, OnInit } from '@angular/core';
import { InscricaoService } from '../subscription/inscricao.service';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  inscricoes: {};
  constructor(private service: InscricaoService, private overlay: OverlayContainer) {
    document.body.classList.add("light-custom-theme", "mat-app-background");
    this.overlay.getContainerElement().classList.add("light-custom-theme");
    
  }
  
  ngOnInit() {
    this.getInscritos();
  }

  getInscritos(){
    var self = this;
    self.service.getInscricoes().then(function(response){
      self.inscricoes = response;
    });  
  }
  
  haveInscritos(){
    return this.inscricoes ? true : false;
  }

}
