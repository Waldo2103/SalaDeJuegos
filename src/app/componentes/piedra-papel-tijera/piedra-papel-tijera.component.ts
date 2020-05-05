import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService} from '../../servicios/database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { ResultadosService } from '../../servicios/resultados/resultados.service';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  nuevoJuego: JuegoPiedraPapelTijera;
  repetidor: any;
  stop: boolean = false;
  enJuego: boolean = false;
  imagenJugada: string = './././assets/imagenes/piedra.png';
  imagenJugadaUsario: string = './././assets/imagenes/tijera.png';
  jugadaSeleccionada: number;

  modalText: string;

  constructor(private resulService: ResultadosService,public authService: AuthService,private router: Router, public databaseService : DatabaseService){
    this.nuevoJuego = new JuegoPiedraPapelTijera(databaseService);
  }

  nuevo() {
    this.stop = false;
    this.enJuego = true;
    this.repetidor = setInterval(() => {
      this.nuevoJuego.generarJugada();
      this.setImagenes();
      
      if (this.stop) {
        this.nuevoJuego.jugadaUsuario = this.jugadaSeleccionada;
        this.setImagenes();
        clearInterval(this.repetidor);
        this.verificar();
      }
    }, 80);
  }

  detener(jugada: number) {
    this.jugadaSeleccionada = jugada;
    this.stop = true;
  }

  verificar() {
    this.nuevoJuego.verificarJugada();
    if(this.nuevoJuego.gano == false){
      this.mostrarMensaje();
    } else{
      setTimeout(()=>{
        this.nuevo()
      }, 3000);
      
    }

  }

  /**
   *  -1 (usuario pierde)
   *   0 (empate)
   *   1 (usuario gana)
   */

  resultado(resul: any){
    this.resulService.createResul(resul);
  }

  mostrarMensaje() {
    let email = localStorage.getItem("email");
      let f = new Date;
      var fec: string = f.getDate()+"/"+f.getMonth()+"/"+f.getUTCFullYear()+" - "+f.getUTCHours()+":"+f.getUTCMinutes()+":"+f.getUTCSeconds();
        
      let data = {
        juego: "Piedra, Papel o Tijera",
        email: email,
        fechaJugada: fec,
        resultado: ("Aciertos: " + this.nuevoJuego.cont)
      }
      this.resultado(data);
    (<HTMLButtonElement>document.getElementById('btnModal')).click();
    switch (this.nuevoJuego.resultado) {
      case -1:
        this.modalText = "PERDISTE!!";
        break;
      case 0:
        this.modalText = "EMPATE!!";
        break;
      case 1:
        this.modalText = "GANASTE!!";
        break;
    }
    this.nuevoJuego.reset();
  }

  setImagenes() {
    switch (this.nuevoJuego.jugada) {
      case 1:
        this.imagenJugada = './././assets/imagenes/piedra.png';
        break;
      case 2:
        this.imagenJugada = './././assets/imagenes/papel.png';
        break;
      case 3:
        this.imagenJugada = './././assets/imagenes/tijera.png';
        break;
    }
    switch (this.nuevoJuego.jugadaUsuario) {
      case 0:
        this.imagenJugadaUsario = '../../../assets/imagenes/question.png';
        break;
      case 1:
        this.imagenJugadaUsario = './././assets/imagenes/piedra.png';
        break;
      case 2:
        this.imagenJugadaUsario = './././assets/imagenes/papel.png';
        break;
      case 3:
        this.imagenJugadaUsario = './././assets/imagenes/tijera.png';
        break;
    }
  }

  ngOnInit() {
  }

}
