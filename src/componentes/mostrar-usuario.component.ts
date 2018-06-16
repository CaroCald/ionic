
import {Component, EventEmitter, OnInit} from "@angular/core";
import {UsuarioService} from "../servicios/usuario.service";

@Component({
  selector: 'mostrar-usuario',
  templateUrl: 'mostrar-usuario.html'
})
export class MostrarUsuarioComponent implements OnInit{
  nombreUsuario='';
  constructor(private _usuarioService:UsuarioService){

  }
  ngOnInit(){
    this.nombreUsuario=this._usuarioService.nombreUsuario;
  }
  escucharCambiosNombreUsuario(){
    this._usuarioService.cambioNombreUsuario.subscribe((nombreUsuario:string) =>{this.nombreUsuario=nombreUsuario})
  }


}
