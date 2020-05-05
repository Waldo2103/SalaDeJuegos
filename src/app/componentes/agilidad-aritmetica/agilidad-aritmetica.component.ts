import { Component, OnInit } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService} from '../../servicios/database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { ResultadosService } from '../../servicios/resultados/resultados.service';

declare var $: any;

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  nuevoJuego: JuegoAgilidad;
  enJuego: boolean;
  tiempo: number;
  repetidor: any;
  ocultarNav: boolean;

  modalText: string;

  constructor(private resulService: ResultadosService,public authService: AuthService,private router: Router, public databaseService : DatabaseService){
    this.enJuego = false;
    this.tiempo = 5;
    this.nuevoJuego = new JuegoAgilidad(databaseService);
  }

  setInputNumeroIngresado(){
    setTimeout(()=>{
      (<HTMLInputElement>document.getElementById("input-numero-ingresado")).value = null;
      document.getElementById("input-numero-ingresado").focus();
    }, 1);
  }

  /**VENTANA MODAL */



  nuevo(): void {
    this.setInputNumeroIngresado();
    this.enJuego = true;
    this.nuevoJuego.generarOperacion();
    this.repetidor = setInterval(() => {
      this.tiempo--;
      if (this.tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.tiempo = 10;
      }
    }, 900);
  }

  verificar() {
    if (this.nuevoJuego.verificar() != false) {
      this.modalText = "CORRECTO!!";
      this.nuevo();
    } else {
      let email = localStorage.getItem("email");
      let f = new Date;
      var fec: string = f.getDate()+"/"+f.getMonth()+"/"+f.getUTCFullYear()+" - "+f.getUTCHours()+":"+f.getUTCMinutes()+":"+f.getUTCSeconds();
        
      let data = {
        juego: "Agilidad Aritmética",
        email: email,
        fechaJugada: fec,
        resultado: ("Aciertos: " + this.nuevoJuego.cont)
      }
      this.resultado(data);
      (<HTMLButtonElement>document.getElementById('btnModal')).click();
      this.modalText = "INCORRECTO! Record: "+ this.nuevoJuego.cont;
      

    }
    //(<HTMLButtonElement>document.getElementById('btnModal')).click();
  }

  resultado(resul: any){
    this.resulService.createResul(resul);
  }

  ngOnInit() {
    //this.ocultarNav = false;
  }

}
