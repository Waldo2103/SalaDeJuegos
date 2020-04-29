import { Component, OnInit } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService} from '../../servicios/database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

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

  constructor(private toastr: ToastrService,public authService: AuthService,private router: Router, public databaseService : DatabaseService){
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
    if (this.nuevoJuego.verificar()) {
      console.log("bien ahi!");
      this.modalText = "CORRECTO!!";
    } else {
      console.log("NOP!");
      this.modalText = "INCORRECTO";
    }
    (<HTMLButtonElement>document.getElementById('btnModal')).click();
  }
  ngOnInit() {
    //this.ocultarNav = false;
  }

}
