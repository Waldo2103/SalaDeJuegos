import { Juego, ModoDeJuego, EstadoJuego, Juegos } from '../clases/juego';
import { DatabaseService} from '../servicios/database.service';

interface ICarta {
    //id: string;
    valor: number;
    foto: string;
}
interface ICartas{
    carta:string;
}
export class JuegoCartas extends Juego {
    mazo: {[id: string]: ICarta; } = {
        "ancho": { valor:14, foto: "../../assets/imagenes/Espada/1.jpg"},
        "anchoB": { valor:13, foto: "../../assets/imagenes/Basto/1.jpg"},
        "sieteE": { valor:12, foto: "../../assets/imagenes/Espada/7.jpg"},
        "sieteO": { valor:11, foto: "../../assets/imagenes/Oro/7.jpg"},
        "tresE": { valor:10, foto: "../../assets/imagenes/Espada/3.jpg"},
        "tresO": { valor:10, foto: "../../assets/imagenes/Oro/3.jpg"},
        "tresC": { valor:10, foto: "../../assets/imagenes/Copa/3.jpg"},
        "tresB": { valor:10, foto: "../../assets/imagenes/Basto/3.jpg"},
        "dosE": { valor:9, foto: "../../assets/imagenes/Espada/2.jpg"},
        "dosO": { valor:9, foto: "../../assets/imagenes/Oro/2.jpg"},
        "dosC": { valor:9, foto: "../../assets/imagenes/Copa/2.jpg"},
        "dosB": { valor:9, foto: "../../assets/imagenes/Basto/2.jpg"},
        "unoC": { valor:8, foto: "../../assets/imagenes/Copa/1.jpg"},
        "unoB": { valor:8, foto: "../../assets/imagenes/Basto/1.jpg"},
        "doceE": { valor:7, foto: "../../assets/imagenes/Espada/12.jpg"},
        "doceO": { valor:7, foto: "../../assets/imagenes/Oro/12.jpg"},
        "doceC": { valor:7, foto: "../../assets/imagenes/Copa/12.jpg"},
        "doceB": { valor:7, foto: "../../assets/imagenes/Basto/12.jpg"},
        "onceE": { valor:6, foto: "../../assets/imagenes/Espada/11.jpg"},
        "onceO": { valor:6, foto: "../../assets/imagenes/Oro/11.jpg"},
        "onceC": { valor:6, foto: "../../assets/imagenes/Copa/11.jpg"},
        "onceB": { valor:6, foto: "../../assets/imagenes/Basto/11.jpg"},
        "diezE": { valor:5, foto: "../../assets/imagenes/Espada/10.jpg"},
        "diezO": { valor:5, foto: "../../assets/imagenes/Oro/10.jpg"},
        "diezC": { valor:5, foto: "../../assets/imagenes/Copa/10.jpg"},
        "diezB": { valor:5, foto: "../../assets/imagenes/Basto/10.jpg"},
        "sieteC": { valor:4, foto: "../../assets/imagenes/Copa/7.jpg"},
        "sieteB": { valor:4, foto: "../../assets/imagenes/Basto/7.jpg"},
        "seisE": { valor:3, foto: "../../assets/imagenes/Espada/6.jpg"},
        "seisO": { valor:3, foto: "../../assets/imagenes/Oro/6.jpg"},
        "seisC": { valor:3, foto: "../../assets/imagenes/Copa/6.jpg"},
        "seisB": { valor:3, foto: "../../assets/imagenes/Basto/6.jpg"},
        "cincoE": { valor:2, foto: "../../assets/imagenes/Espada/5.jpg"},
        "cincoO": { valor:2, foto: "../../assets/imagenes/Oro/5.jpg"},
        "cincoC": { valor:2, foto: "../../assets/imagenes/Copa/5.jpg"},
        "cincoB": { valor:2, foto: "../../assets/imagenes/Basto/5.jpg"},
        "cuatroE": { valor:1, foto: "../../assets/imagenes/Espada/4.jpg"},
        "cuatroO": { valor:1, foto: "../../assets/imagenes/Oro/4.jpg"},
        "cuatroC": { valor:1, foto: "../../assets/imagenes/Copa/4.jpg"},
        "cuatroB": { valor:1, foto: "../../assets/imagenes/Basto/4.jpg"},
    };
    cartas: {[id: number]: ICartas; } = {
       1:{ carta:"ancho"}, 
       2:{ carta:"anchoB"},
       3:{ carta:"sieteE"},
       4:{ carta:"sieteO"},
       5:{ carta:"tresE"},
       6:{ carta:"tresO"},
       7:{ carta:"tresC"},
       8:{ carta:"tresB"},
       9:{ carta:"dosE"},
       10:{ carta:"dosO"},
       11:{ carta:"dosC"},
       12:{ carta:"dosB"},
       13:{ carta:"unoC"},
       14:{ carta:"unoB"},
       15:{ carta:"doceE"},
       16:{ carta:"doceO"},
       17:{ carta:"doceC"},
       18:{ carta:"doceB"},
       19:{ carta:"onceE"},
       20:{ carta:"onceO"},
       21:{ carta:"onceC"},
       22:{ carta:"onceB"},
       23:{ carta:"diezE"},
       24:{ carta:"diezO"},
       25:{ carta:"diezC"},
       26:{ carta:"diezB"},
       27:{ carta:"sieteC"},
       28:{ carta:"sieteB"},
       29:{ carta:"seisE"},
       30:{ carta:"seisO"},
       31:{ carta:"seisC"},
       32:{ carta:"seisB"},
       33:{ carta:"cincoE"},
       34:{ carta:"cincoO"},
       35:{ carta:"cincoC"},
       36:{ carta:"cincoB"},
       37:{ carta:"cuatroE"},
       38:{ carta:"cuatroO"},
       39:{ carta:"cuatroC"},
       40:{ carta:"cuatroB"}
    };
    cartaSeleccionada: string = "";
    cartaSeleccionadaEscondida: string = "";
    eleccionIngresada: string = "";
    carta:string = "";
    carta2: string = ""
    cantidadPalabras:number=39;

    gano :boolean=false;
    cont: number = 0;

    constructor(databaseService: DatabaseService) {
        super(Juegos.Cartas, databaseService);
        this.palabraRandom();
    }

    public Jugar() {
        this.modoDeJuego = ModoDeJuego.Jugando;
        this.ComenzarCronometro();
        //&this.generarNumero();
      }

    palabraRandom(){ 
    
        var randomNumber = Math.floor(Math.random()*this.cantidadPalabras);
        var randomNumber2 = Math.floor(Math.random()*this.cantidadPalabras);
        if (randomNumber == randomNumber2) {
            randomNumber = Math.floor(Math.random()*this.cantidadPalabras);
            randomNumber2 = Math.floor(Math.random()*this.cantidadPalabras);
        } else {
            this.carta = this.cartas[randomNumber].carta.toString();
            this.carta2 = this.cartas[randomNumber2].carta.toString();
        }
   
         this.cartaSeleccionada = this.carta;
         this.cartaSeleccionadaEscondida = this.carta2;
    
      }
    verificar() {
        this.mazo[this.cartaSeleccionada].valor  
        if (this.eleccionIngresada == "mayor") {
            if (this.mazo[this.cartaSeleccionadaEscondida].valor > this.mazo[this.cartaSeleccionada].valor) {
                this.gano = true;
                this.cont = this.cont +1;
            } else {
                this.gano = false;
            }
        } else if (this.eleccionIngresada == "menor") {
            if (this.mazo[this.cartaSeleccionadaEscondida].valor < this.mazo[this.cartaSeleccionada].valor) {
                this.gano = true;
                this.cont = this.cont +1;
            } else {
                this.gano = false;
            }
        } else if (this.eleccionIngresada == "igual") {
            if (this.mazo[this.cartaSeleccionadaEscondida].valor === this.mazo[this.cartaSeleccionada].valor) {
                this.gano = true;
                this.cont = this.cont +1;
            } else {
                this.gano = false;
            }
        } else {
            console.log("Error en eleccion");
        }
        return this.cont;
    }
    

    reset(){
        //this.palabraSeleccionada = "";
        this.cont = 0;
        this.eleccionIngresada = "";
        this.gano = false;
        this.palabraRandom();
    }
    private finDelJuego(){
        this.GuardarResultado();
        this.modoDeJuego = ModoDeJuego.NoJugando;
      }
}