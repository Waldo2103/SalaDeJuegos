import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from "rxjs";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Roles } from '../../clases/roles.enum';
import { ResultadosService } from '../../servicios/resultados/resultados.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('elnav') elnav: ElementRef;

  private subscription: Subscription;
  private ocultarNav: boolean;
   
  form: FormGroup;
  rolesEnum = Roles;

  userbtn: string = "";
  passbtn: string = "";

  completarUser(user : number){
    if (user == 1) {
      this.userbtn = "cvega@cvega.com";
      this.passbtn = "cvega1";
      //this.form.valid = true
      //this.form.get('mail').value ="";
    } else if (user == 2) {
      this.userbtn = "admin@admin.com";
      this.passbtn = "admin1";
    }
  }

  validation_messages = {
    'mail': [
      { type: 'required', message: 'Debe ingresar un email.' },
      { type: 'email', message: 'Debe ingresar un email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Debe ingresar una contraseña.' }
    ]
  };
  modalText: any;


  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder, private resulService: ResultadosService
    ) {
    
      this.form = this.formBuilder.group({
        mail: new FormControl('', Validators.compose([
          Validators.required,
          Validators.email
        ])),
        password: new FormControl('', Validators.required)
      });

  }

  ngOnInit() {
    //this.renderer.setAttribute(this.elnav.nativeElement, "hidden", "true");
    this.ocultarNav = true;
    //this.ocultarNavBar();
  }

  ocultarNavBar(){
    this.ocultarNav = true;
  }

  loguear(user: any){
    this.resulService.createLog(user);
  }
  
  onSubmitLogin() {

    this.userbtn = this.form.get('mail').value
    this.passbtn = this.form.get('password').value

    this.authService.login(this.userbtn, this.passbtn)
      .then(res => {
        let f = new Date;
        var fec: string = f.getDate()+"/"+f.getMonth()+"/"+f.getUTCFullYear()+" - "+f.getUTCHours()+":"+f.getUTCMinutes()+":"+f.getUTCSeconds();
        let data = { email: this.userbtn,fec}
        this.loguear(data);
        localStorage.setItem("email", this.userbtn);
        this.router.navigate(['/Juegos']);
      })
      .catch(error => {
        (<HTMLButtonElement>document.getElementById('btnModal')).click();
        if (error.code === 'auth/user-not-found') {
          this.modalText = "Usuario no encontrado!";
          //this.toastService.error('Usuario no encontrado.');
        } else if (error.code === 'auth/wrong-password') {
          this.modalText = "Contraseña incorrecta.";
          //this.toastService.error('Contraseña incorrecta.');
        } else {
          this.modalText = "Ocurrió un error con el servidor";
        }
      });
  }

  
}