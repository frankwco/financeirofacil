import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormComponent } from './form/form.component';
import { LancamentosService } from '../services/lancamentos.service';
import { Lancamentos } from '../model/lancamentos';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.page.html',
  styleUrls: ['./despesas.page.scss'],
})
export class DespesasPage implements OnInit {
  listaLancamentos = [];
  mesAtual: string = new Date().toISOString();
  constructor(public modalController: ModalController, public lancamentoService: LancamentosService) { }

  ngOnInit() {
    let mesSelecionado = new Date(this.mesAtual).getMonth();
    let anoSelecionado = new Date(this.mesAtual).getFullYear();
    let lancamentos = this.lancamentoService.buscarTodos();
    lancamentos.snapshotChanges().subscribe(res => {
      this.listaLancamentos = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        let mesSalvo = new Date(a['dataLacamento']).getMonth();
        let anoSalvo = new Date(a['dataLacamento']).getFullYear();
        if (mesSelecionado == mesSalvo && anoSelecionado == anoSalvo && a['tipo']=='despesa') {
          a['key'] = item.key;
          this.listaLancamentos.push(a as Lancamentos);
        }
      })
    })
  }

  async alterarLancamento(key) {
    const modal = await this.modalController.create({
      component: FormComponent,
      componentProps: {
        'key': key
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
  selecionarMes() {
    this.ngOnInit();
  }

}
