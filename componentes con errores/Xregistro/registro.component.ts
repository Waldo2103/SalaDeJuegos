import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';//Para validar

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router, private formBuilder: FormBuilder) { }


  registrarForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confPassword: new FormControl()
  });

  submitted = false;

   equalsValidator(otherControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const value: any = control.value;
      const otherValue: any = otherControl;
      if (value != otherValue) {
        console.log("value: " + value +"| othervalue: " + otherValue);
      } else {
        console.log("cosa");
      }
      //console.log("coso");
      return otherValue === value ? null : { 'notEquals': { value, otherValue } };
    };
  }
  
  CustomValidators = {
    equals: this.equalsValidator
  };

  ngOnInit() {
    this.registrarForm = this.formBuilder.group({
    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confPassword: ['', [this.CustomValidators.equals(this.registrarForm.get('password'))]]
      
  });
  /*this.registrarForm.get('confPassword').setValidators(
    this.CustomValidators.equals(this.registrarForm.get('password'))
  );*/
  }

  // convenience getter for easy access to form fields
  get f() { 
    console.log(this.registrarForm.controls["password"].value);
    return this.registrarForm.controls; }

  //get confF(){ return this. }

  onSubmit() { 
    

      // stop here if form is invalid
      if (this.registrarForm.invalid) {
          return;
      }
   }

  

  OnSubmitLogin() {
    this.submitted = true;
    this.authService.login(this.registrarForm.value.email , this.registrarForm.value.password).then(res => {
      this.router.navigate(['/home']);
    }).catch(err => {
      var x = document.getElementById("userInvalid");
      x.style.display = "block";
      // Implementar toast
      this.presentToast()
    })
  }

  //VARIABLES NESARIAS (?)
  errorMessage = "";
  successMessage = "";

  OnSubmitRegistrar(){
    this.submitted = true;
    this.authService.registeruser(this.registrarForm.value.email , this.registrarForm.value.password, )
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "TU USUARIO FUE CREADO CORRECTAMENTE";
    }, err => {
      console.log(err);
      if (err.code == "auth/email-already-in-use") {
        this.errorMessage = "ERROR EL EMAIL INGRESADO YA ESTA REGISTRADO";
      } else {
        this.errorMessage = "ERROR AL CREAR";
      }
      
      this.successMessage = "";
    })
  }


  async presentToast() {
    /*const toast = await this.toastController.create({
      message: 'los datos son incorrectos o no existe el usuario',
      duration: 2000,
      color: "secondary"
    });
    toast.present();*/
    console.log("Error en el ingreso de datos");
  }

  onReset() {
    this.submitted = false;
    this.registrarForm.reset();
  }

}

/*import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Roles } from '../../clases/roles.enum';

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formReg: FormGroup;
  rolesEnum = Roles;

  validation_messages = {
    'mail': [
      { type: 'required', message: 'Debe ingresar un email.' },
      { type: 'email', message: 'Debe ingresar un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Debe ingresar una contraseña.' }
    ],
    'password2': [
      { type: 'required', message: 'Debe ingresar una contraseña.' }
    ]
  };

 email:string;
 password:string;
 password2:string;
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private toastService: ToastrService) { 

      this.formReg = this.formBuilder.group({
        mail: new FormControl('', Validators.compose([
          Validators.required,
          Validators.email
        ])),
        password: new FormControl('', Validators.required)
      });

    }

ngOnInit() {
}

OnSubmitRegister(){
  this.authService.registeruser(this.email,this.password).then( authService => {
    this.router.navigate(['/Principal']);
  }).catch(err=> alert('los datos son incorrectos'))
  //console.log('Estas en la funcion');
}

}
*/