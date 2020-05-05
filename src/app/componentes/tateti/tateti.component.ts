import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from '../../clases/juego-tateti';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService} from '../../servicios/database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { ResultadosService } from '../../servicios/resultados/resultados.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  nuevoJuego: JuegoTateti;
  enJuego: boolean = false;
  turnoJugador = false;
  cuentaMarcas: number = 0;
  imgCruz: string = './././assets/imagenes/X.png'
  imgCirculo: string = './././assets/imagenes/O.png'

  modalText = "";

  constructor(private resulService: ResultadosService,public authService: AuthService,private router: Router, public databaseService : DatabaseService){
    this.nuevoJuego = new JuegoTateti(databaseService);
  }

  generarJugada() {
    let row = Math.floor(Math.random() * 3);
    let col = Math.floor(Math.random() * 3);
    this.marcarJugada(row, col, true);
  }

  resultado(resul: any){
    this.resulService.createResul(resul);
  }

  marcarJugada(row: number, column: number, jugadaGenerada: boolean) {
    if (jugadaGenerada) {
      if (this.nuevoJuego.tablero[row][column] != "" && this.cuentaMarcas < 9) {
        this.generarJugada()
      } else {
        this.cuentaMarcas++;
        this.nuevoJuego.tablero[row][column] = this.imgCruz;
        this.turnoJugador = true;
        if(this.nuevoJuego.verificarTresEnLinea(this.imgCruz)){
          if(!this.nuevoJuego.verificar()){
            let email = localStorage.getItem("email");
            let f = new Date;
            var fec: string = f.getDate()+"/"+f.getMonth()+"/"+f.getUTCFullYear()+" - "+f.getUTCHours()+":"+f.getUTCMinutes()+":"+f.getUTCSeconds();
              
            let data = {
              juego: "TaTeTi",
              email: email,
              fechaJugada: fec,
              resultado: "Perdió"
            }
            this.resultado(data);
            (<HTMLButtonElement>document.getElementById('btnModal')).click();
            this.modalText = "PERDISTE!!";
            //this.toastr.error("Perdiste..", "Te derrotaron");
          }
        }
      }
    } else {
      if (this.nuevoJuego.tablero[row][column] == "") {
        this.cuentaMarcas++;
        this.nuevoJuego.tablero[row][column] = this.imgCirculo;
        this.turnoJugador = false;
        if (!this.nuevoJuego.verificarTresEnLinea(this.imgCirculo)) {
          setTimeout(() => {
            this.generarJugada();
          }, 400);
        } else {
          let email = localStorage.getItem("email");
            let f = new Date;
            var fec: string = f.getDate()+"/"+f.getMonth()+"/"+f.getUTCFullYear()+" - "+f.getUTCHours()+":"+f.getUTCMinutes()+":"+f.getUTCSeconds();
              
            let data = {
              juego: "TaTeTi",
              email: email,
              fechaJugada: fec,
              resultado: "Ganó"
            }
            this.resultado(data);
          (<HTMLButtonElement>document.getElementById('btnModal')).click();
          this.modalText = "GANASTE!!";
          //this.toastr.success("Felicitaciones!", "Ganaste");
        }
      }else{
        let email = localStorage.getItem("email");
            let f = new Date;
            var fec: string = f.getDate()+"/"+f.getMonth()+"/"+f.getUTCFullYear()+" - "+f.getUTCHours()+":"+f.getUTCMinutes()+":"+f.getUTCSeconds();
              
            let data = {
              juego: "TaTeTi",
              email: email,
              fechaJugada: fec,
              resultado: "Empató"
            }
            this.resultado(data);
        (<HTMLButtonElement>document.getElementById('btnModal')).click();
          this.modalText = "HAY TABLA!!";
      }
    }
  }

  nuevo() {
    this.nuevoJuego.juegoTerminado = false;
    this.nuevoJuego.reset();
    this.enJuego = true;
    this.turnoJugador = true;
    this.cuentaMarcas = 0;
  }

  ngOnInit() {
  }

}