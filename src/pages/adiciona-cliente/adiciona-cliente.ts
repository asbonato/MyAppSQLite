import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../modelo/cliente';

@IonicPage()
@Component({
  selector: 'page-adiciona-cliente',
  templateUrl: 'adiciona-cliente.html',
})
export class AdicionaClientePage {
  cliente: Cliente;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = new Cliente();
  }                               

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaClientePage');
  }

  cadastraCliente() {
    console.log(this.cliente);
  }

}
