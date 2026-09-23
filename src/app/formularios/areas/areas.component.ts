import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.component.html'
})
export class AreasComponent {
  num1:string = ''
  num2:string = ''
  res:number = 0
  area:string = ''

  calcArea():void{
    switch (this.area) {
      case 'tri':
        this.res = (parseInt(this.num1) * parseInt(this.num2))/2
        break;
      case 'circ':
        this.res = Math.PI * Math.pow(parseInt(this.num1), 2)
        break;
      case 'rect':
        this.res = parseInt(this.num1) * parseInt(this.num2)
        break;
      case 'penta':
        this.res = (parseInt(this.num1) * parseInt(this.num2))/2
        break;
    }
  }

}
