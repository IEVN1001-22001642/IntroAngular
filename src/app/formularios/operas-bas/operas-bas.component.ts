import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html'
})
export class OperasBasComponent {
  num1:string=''
  num2:string=''
  res:number=0
  operacion:string=''

  /* sumar():void{
    this.res=parseInt(this.num1)+parseInt(this.num2)
  }
  restar():void{
    this.res=parseInt(this.num1)-parseInt(this.num2)
  }
  multi():void{
    this.res=parseInt(this.num1)*parseInt(this.num2)
  }
  dividir():void{
    this.res=parseInt(this.num1)/parseInt(this.num2)
  } */

  operar():void{
    switch (this.operacion) {
      case 'sum':
        this.res=parseInt(this.num1)+parseInt(this.num2)
        break;
      case 'rest':
        this.res=parseInt(this.num1)-parseInt(this.num2)
        break;
      case 'multi':
        this.res=parseInt(this.num1)*parseInt(this.num2)
        break;
      case 'divid':
        this.res=parseInt(this.num1)/parseInt(this.num2)
        break;
    }
  }
}
