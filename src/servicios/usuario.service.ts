import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class UsuarioService {
  nombreUsuario='caro';
  cambioNombreUsuario:EventEmitter<string>=new EventEmitter();

  sumarDosNumeros(numeroUno:number, numeroDos:number){
    return numeroUno+numeroDos;
  }
  emitirCambioNombre(nombreUsuario:string){
    this.nombreUsuario=nombreUsuario;
    //this.cambioNombreUsuario
  }
}
