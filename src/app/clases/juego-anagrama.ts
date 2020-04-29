import { Juego, ModoDeJuego, EstadoJuego, Juegos } from '../clases/juego';
import { DatabaseService} from '../servicios/database.service';


interface IPalabra {
    anagramas: Array<string>;
}
interface IAnagrama{
    palabra:string;
}
export class JuegoAnagrama extends Juego {
    diccionario: {[id: string]: IPalabra; } = {
        "PEDRO": { anagramas: ["PODER"]}, 
        "FLORENCIA": { anagramas: ["NECRÓFILA"]},	  
        "MARTA": { anagramas: ["MATAR"]},
        "ALICANTE": { anagramas: ["CALIENTE"]},
        "PRAGA": { anagramas: ["PAGAR"]},
        "ARIES": { anagramas: ["AIRES"]},
        "CORNISA": { anagramas: ["NARCISO"]},
        "AMPARO": { anagramas: ["PÁRAMO"]},
        "MÓNICA": { anagramas: ["CAMINO"]}
    };
    diccionarioAnagramas: {[id: number]: IAnagrama; } = {
       1:{ palabra: "PEDRO"},
       2:{ palabra: "FLORENCIA"},
       3:{ palabra:"MARTA"},
       4:{ palabra:"ALICANTE"},
       5:{ palabra:"PRAGA"},
       6:{ palabra:"ARIES"},
       7:{ palabra:"CORNISA"},
       8:{ palabra:"AMPARO"},
       9:{ palabra:"MÓNICA"},
    };
    palabraSeleccionada: string = "";
    palabraIngresada: string = "";
    palabra:string = "";
    cantidadPalabras:number=9;

    gano :boolean=false;

    constructor(databaseService: DatabaseService) {
        super(Juegos.AdivinaElNumero, databaseService);
        this.palabraRandom();
    }

    public Jugar() {
        this.modoDeJuego = ModoDeJuego.Jugando;
        this.ComenzarCronometro();
        //&this.generarNumero();
      }

    palabraRandom(){ 
    
        var randomNumber = Math.floor(Math.random()*this.cantidadPalabras);
    
         this.palabra = this.diccionarioAnagramas[randomNumber].palabra.toString();
    
         this.palabraSeleccionada = this.palabra;
    
      }
    verificar() {
        this.diccionario[this.palabraSeleccionada].anagramas.forEach((ana) => 
        {
            if (this.palabraIngresada.toUpperCase() == ana)
                this.gano = true;
        })
        return this.gano;
    }
    

    reset(){
        //this.palabraSeleccionada = "";
        this.palabraIngresada = "";
        this.gano = false;
        this.palabraRandom();
    }
    private finDelJuego(){
        this.GuardarResultado();
        this.modoDeJuego = ModoDeJuego.NoJugando;
      }
}