import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Roles } from '../../clases/roles.enum';
import { ResultadosService } from '../../servicios/resultados/resultados.service';

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  validation_messages = {
    'mail': [
      { type: 'required', message: 'Debe ingresar un email.' },
      { type: 'email', message: 'Debe ingresar un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Debe ingresar una contraseña.' }
    ],
    'password2': [
      {type:'required', message:'Lo ingresado debe coincidir con la contraseña anterior.'}
    ]
  };

 mail:string;
 password:string;
 password2:string;
  modalText: string;

  constructor(private authService: AuthService,
    private resulService: ResultadosService,
    private router: Router, private formBuilder: FormBuilder, private toastService: ToastrService) { 

      this.form = this.formBuilder.group({
        mail: new FormControl('', Validators.compose([
          Validators.required,
          Validators.email
        ])),
        password: new FormControl('', Validators.required),
        password2: new FormControl('', Validators.required)
      });

    }

ngOnInit() {
}
loguear(user: any){
  this.resulService.createLog(user);
}
OnSubmitRegister(){
  if (this.form.get('password').value === this.form.get('password2').value) {
    this.authService.registeruser(this.form.get('mail').value, this.form.get('password').value).then( authService => {
      let f = new Date;
        var fec: string = f.getDate()+"/"+f.getMonth()+"/"+f.getUTCFullYear()+" - "+f.getUTCHours()+":"+f.getUTCMinutes()+":"+f.getUTCSeconds();
        let data = { email: this.form.get('mail').value,fec}
        this.loguear(data);
        localStorage.setItem("email", this.form.get('mail').value);
      this.router.navigate(['/Login']);
    }).catch(error => {
      (<HTMLButtonElement>document.getElementById('btnModal')).click();
      if (error.code === 'auth/email-already-in-use') {
        this.modalText = "El usuario ya existe!";
        //this.toastService.error('Usuario no encontrado.');
      } else if (error.code === 'auth/wrong-password') {
        this.modalText = "Contraseña incorrecta.";
        //this.toastService.error('Contraseña incorrecta.');
      } else {
        console.log(error.code,". ERROR CODE")
        this.modalText = "Ocurrió un error con el servidor";
      }
    }/*err=> alert('los datos son incorrectos', err.code)*/);
  } else {
    this.modalText = "Las contraseñas no coinciden.";
    (<HTMLButtonElement>document.getElementById('btnModal')).click();
  }
  
}

}
