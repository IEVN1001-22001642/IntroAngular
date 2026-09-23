import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent {
  usuario:string="john_fortnite"
  contras:string="awesomesauce"
  inputU:string=""
  inputC:string=""
  welcy:boolean=false
  error:string=""

  logIn():void{
    if (this.inputU === this.usuario) {
      if (this.inputC === this.contras){
        this.welcy=!this.welcy
      }
      else{
        this.error = "La contraseña es incorrecta"
      }
    }
    else if (this.inputC === this.contras) {
      if (this.inputU === this.usuario) {
        this.welcy=!this.welcy
      }
      else{
        this.error = "El usuario es incorrecto"
      }
    }
    else {
      this.error = "El usuario y la contraseña son incorrectos"
    }
  }
}
