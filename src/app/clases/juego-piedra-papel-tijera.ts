import { Juego, ModoDeJuego, EstadoJuego, Juegos } from '../clases/juego';
import { DatabaseService} from '../servicios/database.service';


export class JuegoPiedraPapelTijera extends Juego {
    jugadas: Array<number> = [1, 2, 3];
    jugada: number = 0;
    jugadaUsuario: number = 0;
    resultado: number = -2; // no se inicio el juego
    private intervalo: NodeJS.Timer;
    gano :boolean;
    cont: number = 0;

    constructor(databaseService: DatabaseService) {
        super(Juegos.AdivinaElNumero, databaseService);
        //this.tiempoRestante = 0;
        //this.tecla = "?";
    }

    public Jugar() {
        this.modoDeJuego = ModoDeJuego.Jugando;
        this.ComenzarCronometro();

      }

    generarJugada() {
        this.jugada = this.jugadas[Math.floor(Math.random() * this.jugadas.length)];
        // this.jugadaUsuario = this.jugadas[Math.floor(Math.random() * this.jugadas.length)];
        // console.info("Jugada:", this.jugada);
    }

    /**
     * return:
     *  -1 (usuario pierde)
     *   0 (empate)
     *   1 (usuario gana)
     */
    public verificarJugada(): void {
        switch (this.jugadaUsuario) {
            case 1: // PIEDRA
                if (this.jugada == 1) {
                    this.resultado = 0 // empate
                } else {
                    if (this.jugada == 2)
                        this.resultado = -1 // usr pierde
                    else
                        this.resultado = 1 // usr gana
                }
                break;

            case 2: // PAPEL
                if (this.jugada == 1) {
                    this.resultado = 1 // usr gana
                } else {
                    if (this.jugada == 2)
                        this.resultado = 0 // empate
                    else
                        this.resultado = -1 // usr pierde
                }
                break;

            case 3: // TIJERA
                if (this.jugada == 1) {
                    this.resultado = -1 // usr pierde
                } else {
                    if (this.jugada == 2)
                        this.resultado = 1 // usr gana
                    else
                        this.resultado = 0 // empate
                }
                break;
        }
        this.verificar();
    }

    verificar() {
        if(this.resultado == 1){
            this.gano = true;
            this.cont = this.cont +1;
            return this.cont;
        }else if(this.resultado == 0){
            this.gano = true;
            this.cont = this.cont + 0;
        }else if (this.resultado == -1) {
            this.gano = false;
            return this.gano
        }
        
        //this.reset();
        return this.cont;
    }

    reset(){
        this.jugada = 0;
        this.jugadaUsuario = 0;
    }
    
    private finDelJuego(){
        this.GuardarResultado();
        this.modoDeJuego = ModoDeJuego.NoJugando;
      }
}
