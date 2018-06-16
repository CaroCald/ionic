import {Component, OnInit} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {UsuarioService} from "../../servicios/usuario.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  nombre="hola";
  passwordConfirmacion="";
  password="";
  constructor(public navCtrl: NavController, public toastCrl: ToastController, private _usuarioService:UsuarioService,
              private _httpService:HttpClient) {

  }
  ngOnInit(){
    console.log(this._usuarioService.nombreUsuario='yooo');
    const observablePokemos=this._httpService.get('http://pokeapi.cn/api/v2/pokemon/25');


  }
  validarFormulario(formulario){
    console.log(formulario);
    console.log(this._usuarioService.nombreUsuario='yooo');
    if(formulario.controls.password.value===this.passwordConfirmacion){
      //ok
    }else{
      this.mostrarToast('Password deben ser iguales');
      this.password="";
      this.passwordConfirmacion="";
    }
  }

  mostrarToast(mensaje:string){
    const toast = this.toastCrl.create({
      message: mensaje,
      duration: 3000,
      position:'top'
    });
    toast.present();
  }

}
