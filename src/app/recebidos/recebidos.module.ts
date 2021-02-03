import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecebidosPageRoutingModule } from './recebidos-routing.module';

import { RecebidosPage } from './recebidos.page';
import {FormComponent} from './form/form.component';
import { BrMaskerModule, BrMaskDirective } from 'br-mask';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecebidosPageRoutingModule,
    BrMaskerModule,
    ReactiveFormsModule
  ],
  declarations: [RecebidosPage, FormComponent],
  providers: [
  BrMaskDirective
],
  entryComponents:[FormComponent]
})
export class RecebidosPageModule {}
