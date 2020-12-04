import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormComponent} from './form/form.component';
import {LancamentosService} from '../services/lancamentos.service';
import {Lancamentos} from '../model/lancamentos';

@Component({
  selector: 'app-recebidos',
  templateUrl: './recebidos.page.html',
  styleUrls: ['./recebidos.page.scss'],
})
export class RecebidosPage implements OnInit {
  listaLancamentos=[];
  constructor(public modalController: ModalController, public lancamentoService:LancamentosService) { }

  ngOnInit() {
let lancamentos = this.lancamentoService.buscarTodos();
lancamentos.snapshotChanges().subscribe(res => {
  this.listaLancamentos = [];
  res.forEach(item => {
    let a = item.payload.toJSON();
    a['key'] = item.key;
    this.listaLancamentos.push(a as Lancamentos);
  })
})
  }

  async alterarLancamento(key) {
      const modal = await this.modalController.create({
        component: FormComponent,
        componentProps:{
          'key':key
        }
      });
      return await modal.present();
    }

  async chamarFormulario() {
      const modal = await this.modalController.create({
        component: FormComponent
      });
      return await modal.present();
    }


}
