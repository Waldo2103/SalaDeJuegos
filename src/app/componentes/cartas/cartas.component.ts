import { Component, OnInit } from '@angular/core';
import { JuegoCartas } from '../../clases/juego-cartas'
import { ToastrService } from 'ngx-toastr';
import { DatabaseService} from '../../servicios/database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {

  nuevoJuego: JuegoCartas;
  enJuego: boolean = false;
  ocultarVerificar: boolean = true;
  fotoCarta: string;

  modalText = "";
  eligio: boolean;

  constructor(private toastr: ToastrService,public authService: AuthService,private router: Router, public databaseService : DatabaseService){
    this.nuevoJuego = new JuegoCartas(databaseService);
  }

  verificarUsr() {
    this.ocultarVerificar = true;
    console.log(this.nuevoJuego);
    this.nuevoJuego.verificar();
    this.mostrarMensaje();
  }
 
  nuevo(): void {
    this.enJuego = true;
    this.eligio = false;
  }

  eleccion(elec:string){
    this.nuevoJuego.eleccionIngresada = elec;
    this.nuevoJuego.verificar();
    this.ocultarVerificar = false;
    //this.enJuego = false;
    this.eligio = true;
    if (this.nuevoJuego.gano == false) {
      this.mostrarMensaje();
    }
    
  }

  otraCarta(){
    this.eligio  = false;
    this.nuevoJuego.palabraRandom();
  }

  mostrarMensaje() {
    (<HTMLButtonElement>document.getElementById('btnModal')).click();
    this.modalText = "Tu Record es: "+ this.nuevoJuego.cont;
    /*if (!this.nuevoJuego.gano) {
      this.modalText = "PERDISTE!!";
    } else {
      this.modalText = "R";
    }*/
    this.enJuego = false;
    this.ocultarVerificar = true;
    this.nuevoJuego.reset();

  }

  ngOnInit() {

  }


}
