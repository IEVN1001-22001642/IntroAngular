import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'John Fortnite';

  duplicaNumero(n1:number):number{
    return n1*2
  }

  pelicula={
    titulo:'Spider Man',
    fechaLanzamiento:new Date(),
    precio:1234
  }
}
