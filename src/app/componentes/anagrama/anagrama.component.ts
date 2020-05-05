import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'
import { ToastrService } from 'ngx-toastr';
import { DatabaseService} from '../../servicios/database.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { ResultadosService } from '../../servicios/resultados/resultados.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})

export class AnagramaComponent implements OnInit {
  nuevoJuego: JuegoAnagrama;
  enJuego: boolean = false;
  ocultarVerificar: boolean = false;

  modalText = "";

  constructor(private resulService: ResultadosService,public authService: AuthService,private router: Router, public databaseService : DatabaseService){
    this.nuevoJuego = new JuegoAnagrama(databaseService);
  }

  verificarUsr() {
    //this.ocultarVerificar = true;
    this.nuevoJuego.verificar();
    if (this.nuevoJuego.gano == false) {
      this.mostrarMensaje()
    }else{
      this.nuevoJuego.reset();
    }

  }
 
  nuevo(): void {
    this.enJuego = true;
  }

  resultado(resul: any){
    this.resulService.createResul(resul);
  }

  mostrarMensaje() {
    let email = localStorage.getItem("email");
      let f = new Date;
      var fec: string = f.getDate()+"/"+f.getMonth()+"/"+f.getUTCFullYear()+" - "+f.getUTCHours()+":"+f.getUTCMinutes()+":"+f.getUTCSeconds();
        
      let data = {
        juego: "Anagrama",
        email: email,
        fechaJugada: fec,
        resultado: ("Aciertos: " + this.nuevoJuego.cont)
      }
      this.resultado(data);
    (<HTMLButtonElement>document.getElementById('btnModal')).click();
    if (this.nuevoJuego.gano) {
      this.modalText = "CORRECTO!!";
      //this.toastr.success("Lo lograste", "Bravo!");
    } else {
      this.modalText = "PERDISTE!!";
     // this.toastr.error(this.nuevoJuego.palabraIngresada + ", no es anagrama de " + this.nuevoJuego.palabraSeleccionada, 
     //   "Seguí participando");
    }
    this.enJuego = false;
    this.ocultarVerificar = false;
    this.nuevoJuego.reset();

  }

  ngOnInit() {
  }

}