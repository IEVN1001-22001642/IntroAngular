import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.component.html',
})
export class DistanciaComponent {
  x1:string=''
  x2:string=''
  y1:string=''
  y2:string=''
  res:number=0

  distancia():void{
    this.res=Math.sqrt(Math.pow(parseInt(this.x2) - parseInt(this.x1), 2) + Math.pow(parseInt(this.y2) - parseInt(this.y1), 2))
  }

}
