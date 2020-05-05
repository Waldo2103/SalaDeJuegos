
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { DatabaseService } from '../../servicios/database.service';
import { ResultadosService } from '../../servicios/resultados/resultados.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  listado:any
  //miJugadoresServicio:JugadoresService
  
    constructor(private resulServ: ResultadosService) {
      //this.miJugadoresServicio = serviceJugadores;
    }
    


  ngOnInit() {
    this.TraerTodos();
  }


  TraerTodos(){
    this.resulServ.getResuls().subscribe((productsSnapshot) => {
      
      this.listado = [];
      productsSnapshot.forEach((productData: any) => {
        this.listado.push(
          {
            email: productData.payload.doc.data().email,
            fechaJugada: productData.payload.doc.data().fechaJugada,
            juego: productData.payload.doc.data().juego,
            resultado: productData.payload.doc.data().resultado,
        });
     
        return this.listado;
      })
    });
  }
}
