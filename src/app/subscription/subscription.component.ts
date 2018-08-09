import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import {ErrorStateMatcher} from '@angular/material/core';
import { InscricaoService } from './inscricao.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  nome: string;
  email: string;
  telefone: string;
  motivo: string;
  inscrito: boolean = false;
  constructor(private service:InscricaoService, private overlay: OverlayContainer) { 

  }


  
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    document.body.classList.add("light-custom-theme", "mat-app-background");
    this.overlay.getContainerElement().classList.add("light-custom-theme");
    //this.service.getInscricoes();
  }

  getInscrito(){
    return this.inscrito;
  }

  validator(field, type){
    if(field){
      if(field.touched){
        if(!field.valid){
          if(type) return field.errors[type];
        }
      }
    }
  }

  onSubmit(f: NgForm) {
    if(f.form.valid){
      this.service.addInscricao(f.form.value);
      this.inscrito =  true;
      f.form.reset();
    }
  }

}
