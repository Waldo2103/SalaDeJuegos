import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { ResultadosService } from '../../servicios/resultados/resultados.service';


@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any
  miJugadoresServicio:JugadoresService
  
    constructor(serviceJugadores:JugadoresService, private resulServ: ResultadosService) {
      //this.miJugadoresServicio = serviceJugadores;
     
    }
    


  ngOnInit() {
    this.TraerTodos();
  }


  TraerTodos(){
    this.resulServ.getLogs().subscribe((productsSnapshot) => {
      
      this.listado = [];
      productsSnapshot.forEach((productData: any) => {
        this.listado.push(
          {
            email: productData.payload.doc.data().email,
            fec: productData.payload.doc.data().fec,
        });
        /*this.products.push( {
          id: 1,//productData.payload.doc.data().id,
          descripcion: "",//productData.payload.doc.data().descripcion,
          tipo: "",//productData.payload.doc.data().tipo,
          fechaDeVencimiento: new Date ("12/12/2020"),//productData.payload.doc.data().fechaDeVencimiento ,
          precio: 1,//productData.payload.doc.data().precio,
          rutaDeFoto: ""//productData.payload.doc.data().rutaDeFoto
        });*/
        return this.listado;
      })
    });
  }
  /*TraerGanadores(){
    this.miJugadoresServicio.traertodos('jugadores/','ganadores').then(data=>{
      //console.info("jugadores listado",(data));
      this.listado= data;

    });
  }
  TraerPerdedores(){
    this.miJugadoresServicio.traertodos('jugadores/','perdedores').then(data=>{
      //console.info("jugadores listado",(data));
      this.listado= data;

    });
  }*/

}
