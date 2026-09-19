import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent {

  imageWidth:number = 40;
  imageMargin:number = 2;
  muestraImage:boolean = true;
  listFilter:string = "";

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }

  heroes:IHeroes[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      description:"Kame Hame Ha!",
      race:"Saiyan",
      ki:9000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      description:"Final Flash!",
      race:"Saiyan",
      ki:8000
    },
    {
      imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre:"Piccolo",
      description:"Special Beam Cannon!",
      race:"Namekiano",
      ki:5000
    },
    {
      imagen:"https://dragonball-api.com/characters/Freezer.webp",
      nombre:"Frieza",
      description:"Death Ball!",
      race:"Frieza race",
      ki:9500
    }
  ]
}
