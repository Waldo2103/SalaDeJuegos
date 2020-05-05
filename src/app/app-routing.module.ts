import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
//import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
//import { MemoriaComponent } from './componentes/memoria-numerica/memoria-numerica.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import {LoginComponent}from './componentes/login/login.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component'
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListadoComponent } from'./componentes/listado/listado.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { ListadoDeResultadosComponent }from './componentes/listado-de-resultados/listado-de-resultados.component';

import {AuthGuard}from "./guards/auth.guard";
import {NologinGuard} from "./guards/nologin.guard";
import { CartasComponent } from './componentes/cartas/cartas.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  //{ path: 'Registro',component: RegistroComponent,},//canActivate:[AuthGuard] ,data: {animation: 'RegistroPage'}},
  {path: 'Jugadores' , component: JugadoresListadoComponent,canActivate:[AuthGuard]},
  {path: 'Login' , component: LoginComponent,canActivate:[NologinGuard] ,data: {animation: 'LoginPage'}},
  {path: 'QuienSoy' , component: QuienSoyComponent,canActivate:[AuthGuard],data: {animation: 'LoginPage'}},
  {path: 'Registro' , component: RegistroComponent},
  {path: 'Listado' , component: ListadoComponent,canActivate:[AuthGuard],data: {animation: 'LoginPage'}},
  {path: 'Paises' , component: ListadoDePaisesComponent},
  {path: 'Resultados',component: ListadoDeResultadosComponent,canActivate:[AuthGuard],data: {animation: 'LoginPage'}},
  {
    path: 'Juegos', 
    component: JuegosComponent,canActivate:[AuthGuard],data: {animation: 'LoginPage'},
    children: [
      { path: '', component: MenuCardComponent },
      { path: 'Agilidad', component: AgilidadAritmeticaComponent },
      { path: 'PiedraPapelTijera', component: PiedraPapelTijeraComponent },
      { path: 'Cartas', component: CartasComponent },
      { path: 'Anagrama', component: AnagramaComponent },
      { path: 'Tateti', component: TatetiComponent },
    ]
  },
  {path: '**',redirectTo: '/Juegos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
