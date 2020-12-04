import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Lancamentos} from '../../model/lancamentos';
import {LancamentosService} from '../../services/lancamentos.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  repetirLancamento=false;
  lancamento:Lancamentos;
  @Input() key:string;
  constructor(public modalCtrl:ModalController, public lancamentosService:LancamentosService) { }

  ngOnInit() {
    if(this.key!=undefined){
      this.lancamentosService.buscarPorId(this.key).valueChanges().subscribe(res=>{
        this.lancamento = res;
      })
    }else{
      this.lancamento={key:'',
        descricao:'',
        valor:0,
        tipo:'recebido',
        categoria:'Salário',
        dataLacamento:new Date(),
        quantidadeVezes:0,
        situacao:true};
        }
  }
excluirLancamento(){
  if(this.key!=undefined){
    this.lancamentosService.removerLancamento(this.key);
    this.dismiss();
  }
}

  salvarLancamento(){
    if(this.key==undefined){
    this.lancamentosService.criarLancamento(this.lancamento).then(res => {
      console.log('Deu certo');
      console.log(res);
        this.dismiss();
    }).catch(error => console.log(error));
  }else{
    this.lancamentosService.atualizarLancamento(this.key, this.lancamento).then(res => {
      console.log('Deu certo alterar');
      console.log(res);
        this.dismiss();
    }).catch(error => console.log(error));
  }

  }

  dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }
}
