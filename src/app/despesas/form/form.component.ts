import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Lancamentos } from '../../model/lancamentos';
import { LancamentosService } from '../../services/lancamentos.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  repetirLancamento = false;
  lancamento: Lancamentos;
  @Input() key: string;
  corValor;
  private todo: FormGroup;

  constructor(private formBuilder: FormBuilder, public modalCtrl: ModalController, public lancamentosService: LancamentosService) {
    this.todo = this.formBuilder.group({
      descricao: ['ss', Validators.required],
      dataLacamento: [new Date().toISOString()],
      valorString: [0, Validators.required],
      tipo: ['despesa'],
      categoria: ['Salário'],
      quantidadeVezes: [1],
      situacao: [true],
      repetirLancamento: [false]
    });
  }


  ngOnInit() {
    this.corValor = "default";
    if (this.key != undefined) {
      this.lancamentosService.buscarPorId(this.key).valueChanges().subscribe(res => {
        this.lancamento = res;
        //convertendo para string por conta da , da máscara
        //retirei pois estava dando problemas para números com casas decimais terminadas com zero
        //this.lancamento.valorString = this.lancamento.valor + "";
      })
    }
    else {
      this.lancamento = {
        key: '',
        descricao: '',
        valor: 0,
        valorString: '00',
        tipo: 'despesa',
        categoria: 'Salário',
        dataLacamento: new Date().toISOString(),
        quantidadeVezes: 1,
        repetirLancamento: false,
        situacao: true
      };
    }
  }
  excluirLancamento() {
    if (this.key != undefined) {
      this.lancamentosService.removerLancamento(this.key);
      this.dismiss();
    }
  }

  addMonths(m) {
    var d = new Date(this.lancamento.dataLacamento);
    var years = Math.floor(m / 12);
    var months = m - (years * 12);
    if (years) d.setFullYear(d.getFullYear() + years);
    if (months) d.setMonth(d.getMonth() + months);
    return d;
  }

  salvarLancamento() {

    this.lancamento.valor = parseFloat(this.lancamento.valorString.replace(',', '.'));
    if (this.lancamento.valor > 0) {
      if (this.key == undefined) {
        this.lancamentosService.criarLancamento(this.lancamento).then(res => {

          if (this.repetirLancamento == true) {
            let ultimoRegistro = false;
            for (let x = 0; x < this.lancamento.quantidadeVezes; x++) {
              if (x == (this.lancamento.quantidadeVezes - 1)) {
                ultimoRegistro = true;
              }

              let novoLancamento:Lancamentos=new Lancamentos();
              Object.assign(novoLancamento, this.lancamento);
              var novaData = new Date();

              novaData = this.addMonths((x + 1));
              novoLancamento.dataLacamento = novaData.toISOString();

              this.lancamentosService.criarLancamento(novoLancamento).then(res => {

                if (ultimoRegistro) {
                  this.dismiss();
                }
              }).catch(error => console.log(error));
            }
          } else {
            this.dismiss();
          }


        }).catch(error => console.log(error));


      } else {
        this.lancamentosService.atualizarLancamento(this.key, this.lancamento).then(res => {
          //  console.log('Deu certo alterar');
          //    console.log(res);
          this.dismiss();
        }).catch(error => console.log(error));
      }
    } else {
      this.corValor = "red";
    }

  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
