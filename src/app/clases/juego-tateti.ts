import { Juego, ModoDeJuego, EstadoJuego, Juegos } from '../clases/juego';
import { DatabaseService} from '../servicios/database.service';


export class JuegoTateti extends Juego {
    tablero: Array<Array<string>> = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];


    jugada: number;
    jugadaUsuario: number = 0;

    juegoTerminado: boolean = true;

    private intervalo: NodeJS.Timer;
    gano :boolean=false;

    constructor(databaseService: DatabaseService) {
        super(Juegos.AdivinaElNumero, databaseService);
        //this.tiempoRestante = 0;
        //this.tecla = "?";
    }

    public Jugar() {
        this.modoDeJuego = ModoDeJuego.Jugando;
        this.ComenzarCronometro();
      }

    verificarTresEnLinea(marca: string): boolean {
        if (//horizontales
            (this.tablero[0][0] == marca && this.tablero[0][1] == marca && this.tablero[0][2] == marca) ||
            (this.tablero[1][0] == marca && this.tablero[1][1] == marca && this.tablero[1][2] == marca) ||
            (this.tablero[2][0] == marca && this.tablero[2][1] == marca && this.tablero[2][2] == marca) ||
            //verticales
            (this.tablero[0][0] == marca && this.tablero[1][0] == marca && this.tablero[2][0] == marca) ||
            (this.tablero[0][1] == marca && this.tablero[1][1] == marca && this.tablero[2][1] == marca) ||
            (this.tablero[0][2] == marca && this.tablero[1][2] == marca && this.tablero[2][2] == marca) ||
            //diagonales
            (this.tablero[0][0] == marca && this.tablero[1][1] == marca && this.tablero[2][2] == marca) ||
            (this.tablero[0][2] == marca && this.tablero[1][1] == marca && this.tablero[2][0] == marca)) {
            this.juegoTerminado = true;
            if (marca == 'O')
                this.gano = true;

            // this.reset();
        }
        return this.juegoTerminado;
    }

    verificar(): boolean {
        if (this.juegoTerminado && this.gano)
            return true;
        else
            return false;
    }

    reset(): void {
        this.gano = false;
        this.tablero = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        console.info("tablero: ", this.tablero)
    }
    
    private finDelJuego(){
        this.GuardarResultado();
        this.modoDeJuego = ModoDeJuego.NoJugando;
      }
}