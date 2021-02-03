import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { LancamentosService } from '../services/lancamentos.service';
import { Platform, ModalController, MenuController, ActionSheetController, PopoverController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  saldoMes;
  valorRecebido;
  valorReceber;
  valorDespesa;
  valorPagar;
  valorTotalRecebido;
  valorTotalDespesa;
  mesAtual: string = new Date().toISOString();
  // set up hardware back button event.



  constructor(
    public router: Router,
    public lancamentoService: LancamentosService,
    private platform: Platform,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController
  ) {
    //alert("construtuor");

    //    this.platform.resume.subscribe((result) => {
    //    alert('Platform Resume Event');
    //    });


  }





  ngOnInit() {
    //alert("on init");
    let lancamentos = this.lancamentoService.buscarTodos();
    lancamentos.snapshotChanges().subscribe(res => {
      this.saldoMes = 0;
      this.valorRecebido = 0;
      this.valorReceber = 0;
      this.valorDespesa = 0;
      this.valorPagar = 0;
      let mesSelecionado = new Date(this.mesAtual).getMonth();
      let anoSelecionado = new Date(this.mesAtual).getFullYear();
      res.forEach(item => {
        let a = item.payload.toJSON();
        let mesSalvo = new Date(a['dataLacamento']).getMonth();
        let anoSalvo = new Date(a['dataLacamento']).getFullYear();

        if (mesSelecionado == mesSalvo && anoSelecionado == anoSalvo) {
          if (a['tipo'] == 'recebido' && a['situacao'] == 1) {
            this.valorRecebido += parseFloat(a['valor']);
          } else if (a['tipo'] == 'recebido' && a['situacao'] == 0) {
            this.valorReceber += parseFloat(a['valor']);
          }

          if (a['tipo'] == 'despesa' && a['situacao'] == 1) {
            this.valorDespesa += parseFloat(a['valor']);
          } else if (a['tipo'] == 'despesa' && a['situacao'] == 0) {
            this.valorPagar += parseFloat(a['valor']);
          }
        }
      })
      this.valorTotalDespesa = this.valorPagar + this.valorDespesa;
      this.valorTotalRecebido = this.valorReceber + this.valorRecebido;

      this.saldoMes = (this.valorRecebido + this.valorReceber) - (this.valorDespesa + this.valorPagar);
      this.saldoMes = (this.saldoMes.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
      this.valorPagar = (this.valorPagar.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
      this.valorDespesa = (this.valorDespesa.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
      this.valorTotalDespesa = (this.valorTotalDespesa.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));

      this.valorReceber = (this.valorReceber.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
      this.valorRecebido = (this.valorRecebido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
      this.valorTotalRecebido = (this.valorTotalRecebido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
    })

  }

  ngAfterViewInit() {

    /**
        alert("aqui");
        this.backButtonSubscription = this.platform.backButton.subscribe(() => {
          alert("aqui 3");
          if (this.constructor.name == "Tab1Page") {
            alert("aqui 2");
            //navigator['app'].exitApp();
          }
        });**/
  }

  ngOnDestroy() {
    alert("aqui 3");
    this.backButtonSubscription.unsubscribe();
  }

  selecionarMes() {
    this.ngOnInit();
  }

  chamarRecebidos() {
    this.router.navigate(['recebidos']);
    //alert("asdddd");
  }

  chamarDespesas() {
    this.router.navigate(['despesas']);
  }

}
