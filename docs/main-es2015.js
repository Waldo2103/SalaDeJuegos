(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--<div id=\"page-container\" >\n    <div id=\"content-wrap\">-->\n        <app-menu></app-menu>\n        <br>\n        <br>\n        <div [@routeAnimations]=\"prepareRoute(outlet)\" >\n            <router-outlet #outlet=\"outlet\"></router-outlet>\n        </div>\n        <app-footer id=\"footer\"></app-footer>\n  <!--  </div>\n    <app-footer id=\"footer\"></app-footer>\n</div>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-4\">{{nuevoJuego.nombre}}</h1>\n        <div *ngIf=\"nuevoJuego.numeroSecreto==0\">\n            <label for=\"input-numero-ingresado\">Generá un número: </label>\n            <p><button (click)=\"generarNumeroUsr()\" class=\"btn btn-primary btn-lg\" type=\"button\" id=\"button-nuevo\">Nuevo\n                    número secreto</button></p>\n        </div>\n        <div *ngIf=\"nuevoJuego.numeroSecreto!=0\">\n            <label for=\"input-numero-ingresado\">Ingresa un número: </label>\n            <div class=\"input-group mb-3\">\n                <input id=\"input-numero-ingresado\" [(ngModel)]=\"nuevoJuego.numeroIngresado\" type=\"number\"\n                    class=\"form-control\" placeholder=\"Ingrese un número:\" aria-label=\"Ingrese un número:\"\n                    aria-describedby=\"button-addon2\">\n                <div [hidden]=\"ocultarVerificar\" class=\"input-group-append\">\n                    <button class=\"btn btn-success\" type=\"button\" id=\"button-verificar\"\n                        (click)=\"verificarUsr()\">Verificar</button>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"nuevoJuego.numeroSecreto!=0\">\n            <h6 *ngIf=\"nuevoJuego.numeroIngresado!=0\" class=\"display-5\">{{nuevoJuego.numeroIngresado}}</h6>\n            <hr class=\"my-4\">\n            <p><i class=\"fa fa-spinner fa-spin\">\n                </i>  Esperando que ingrese un número</p>\n        </div>\n        <h3 [hidden]=\"!gano\">Adivinaste el número</h3>\n        <h3 *ngIf=\"nuevoJuego.numeroSecreto!=0\" [hidden]=\"gano\">Aún no ganaste</h3>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \n<h1> listado </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-4\">{{nuevoJuego.nombre}}</h1>\n        <br>\n        <div *ngIf=\"!enJuego\">\n            <p><button (click)=\"nuevo()\" class=\"btn btn-primary btn-lg\" type=\"button\" id=\"button-nuevo\">\n                    Nuevo juego</button></p>\n        </div>\n        <br>\n        <div *ngIf=\"enJuego\">\n            <h2>{{nuevoJuego.operandoUno}} {{nuevoJuego.operador}} {{nuevoJuego.operandoDos}} = {{nuevoJuego.numeroIngresado}}</h2>\n            <label for=\"input-numero-ingresado\">Ingrese su respuesta: </label>\n            <div class=\"input-group mb-3\">\n                <input id=\"input-numero-ingresado\" [(ngModel)]=\"nuevoJuego.numeroIngresado\" type=\"number\"\n                    class=\"form-control\" placeholder=\"Ingrese un número:\" aria-label=\"Ingrese un número:\"\n                    aria-describedby=\"button-addon2\">\n            </div>\n            <div *ngIf=\"nuevoJuego.operandoUno!=0\">\n                <h6 *ngIf=\"nuevoJuego.numeroIngresado!=0\" class=\"display-5\">{{nuevoJuego.numeroIngresado}}</h6>\n                <hr class=\"my-4\">\n                <p><i class=\"fa fa-spinner fa-spin\">\n                    </i> Te quedan <span style=\"font-weight: bold\">{{tiempo}}</span> segundos</p>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \n<h1> Listado de Resultados </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/anagrama/anagrama.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/anagrama/anagrama.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-4\">{{nuevoJuego.nombre}}</h1>\n        <br>\n        <div *ngIf=\"!enJuego\">\n                <p><button (click)=\"nuevo()\" class=\"btn btn-primary btn-lg\" type=\"button\" id=\"button-nuevo\">\n                        Nuevo juego</button></p>\n        </div>\n        <div class=\"en-juego\" *ngIf=\"enJuego\">\n            <div class=\"container tablero\">\n                <div class=\"row\" *ngIf=\"!enJuego\">\n                    <p>Ingrese un Anagrama..</p>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-4\" *ngIf=\"nuevoJuego.palabraSeleccionada!=''\">\n                        <div class=\"row\">\n                            <h2>{{nuevoJuego.palabraSeleccionada}}</h2>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"input-group mb-3\">\n\n                                <input id=\"input-ingresado\" [(ngModel)]=\"nuevoJuego.palabraIngresada\" type=\"text\"\n                                    class=\"form-control\" placeholder=\"Ingrese un anagrama:\"\n                                    aria-label=\"Ingrese un anagrama:\" aria-describedby=\"button-addon2\">\n                                <div [hidden]=\"ocultarVerificar\" class=\"input-group-append\">\n                                    <button class=\"btn btn-success\" type=\"button\" id=\"button-verificar\"\n                                        (click)=\"verificarUsr()\">Verificar</button>\n                                </div>\n                            </div>\n                        </div>\n                        <p><i class=\"fa fa-spinner fa-spin\">\n                            </i> Ingrese un anagrama de la palabra : {{nuevoJuego.palabraSeleccionada}} </p>\n\n                    </div>\n                </div>\n                <div class=\"row\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n  <div class=\"content\">\n      <h1>Sala de Juegos</h1>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/error/error.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/error/error.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"panel panel-default\">\n    <div class=\"hero-text\">\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\n        <p>Octavio villegas</p>\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\n          </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/footer/footer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/footer/footer.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer fixed-bottom\">\n    <div class=\"container\">\n      <span>Ariel Zamora - 4to B - UTN Facultad Regional Avellaneda</span>\n    </div>\n  </footer>  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/input-jugadores/input-jugadores.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/input-jugadores/input-jugadores.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  input-jugadores works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/juegos/juegos.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/juegos/juegos.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n <router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ul class=\"nav nav-pills nav-justified\">\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\n</ul>-->\n\n\n\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">usuario</th>\n      <th scope=\"col\">gano</th>\n      <th scope=\"col\">puntaje</th>\n      <th scope=\"col\">juego</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jugador of listado\" >\n      <td >{{jugador.usuario}} </td>\n      <td>{{jugador.gano}} </td> \n      <td>{{jugador.puntaje}} </td> \n      <td>{{jugador.juego}} </td> \n      \n    </tr>\n   \n  </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\n Listado de paises\n</h1>\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Pais</th>\n      <th>Región</th>\n      <th>Nombre local</th>\n      <th>Sub Región</th>\n      <th>Población</th>\n      <th>Bandera</th>\n      <th>Capital</th>\n      <th>GPS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pais of listadoDePaises\">\n      <td>{{pais.name}} </td>\n      <td>{{pais.region}} </td> \n      <td>{{pais.nativeName}} </td> \n      <td>{{pais.subregion}} </td>       \n      <td>{{pais.population}} </td> \n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \n      <td>{{pais.capital}} </td> \n      <td>{{pais.borders}} </td> \n      <td>{{pais.latlng}} </td> \n    </tr>\n   \n  </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n\n<table class=\"table\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Juego</th>\n        <th scope=\"col\">Jugador</th>\n        <th scope=\"col\">Resultado</th>\n        <th scope=\"col\">Fecha</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of resultados\">\n        <td >{{juego.juego}} </td>\n        <td >{{juego.nombre}} </td> \n        <td >{{juego.puntaje}} </td>   \n        <td >{{juego.fecha}} </td>     \n      </tr>\n     \n    </tbody>\n  </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado/listado.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado/listado.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \n\n<!-- Centered Pills -->\n<ul class=\"nav nav-pills nav-justified\">\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\n  </ul>\n  \n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listados/listados.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listados/listados.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  listados works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\" >\n  <div class=\"jumbotron\" style=\"padding:50px;\">\n  \n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitLogin()\">\n        <div class=\"imgcontainer\">\n            <img src=\"./././assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\n          </div>\n      <div class=\"container\">\n        <label><b>Usuario</b></label>\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"mail\"  formControlName=\"mail\" required>\n        <ng-container *ngFor=\"let validation of validation_messages.mail\">\n          <div *ngIf=\"form.get('mail').hasError(validation.type) && (form.get('mail').dirty || form.get('mail').touched)\">\n            <label color=\"danger\"> {{ validation.message }} </label>\n          </div>\n        </ng-container>\n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"password\" formControlName=\"password\" required>\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div\n            *ngIf=\"form.get('password').hasError(validation.type) && (form.get('password').dirty || form.get('password').touched)\">\n            <label color=\"danger\"> {{ validation.message }} </label>\n          </div>\n        </ng-container>   \n        <button type=\"button\" class=\"btn btn-success\" type=\"submit\" [disabled]=\"!form.valid\">Aceptar</button>\n      </div>\n\n      <div class=\"container\">\n        <button type=\"button\" class=\"btn btn-danger\">Cancelar</button>\n        <button type=\"button\" class=\"btn btn-info\" routerLink=\"/Registro\" >Registrarse</button>\n      </div>\n     \n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\n   \n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n<input type =\"text\" [(ngModel)]=\"lat\" />\n<input type=\"text\" [(ngModel)]=\"lng\"/> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/memoria-numerica/memoria-numerica.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/memoria-numerica/memoria-numerica.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-4\">{{nuevoJuego.nombre}}</h1>\n        <br>\n        <div *ngIf=\"!enJuego\">\n                <p><button (click)=\"nuevo()\" class=\"btn btn-primary btn-lg\" type=\"button\" id=\"button-nuevo\">\n                        Nuevo juego</button></p>\n        </div>\n        <div *ngIf=\"enJuego\">\n            <div class=\"container tablero\">\n                <div class=\"row\" *ngIf=\"tiempoCumplido\">\n                        <p><i class=\"fa fa-spinner fa-spin\">\n                            </i> Te quedan <span style=\"font-weight: bold\">{{tiempoJuego}}</span> segundos</p>\n                             \n                    <div class=\"col-sm-12 col-md-4\" *ngIf=\"nuevoJuego.numerosSeleccionado!=''\">\n                        <div class=\"row\">\n                            <ul class=\"list-group list-group-horizontal\">\n                                <li class=\"list-group-item flex-fill\" *ngFor=\"let key of nuevoJuego.numerosSeleccionado\">{{key}}</li>\n                              </ul>\n                        </div>\n                    </div>\n                </div> \n                        <br>\n                        <div class=\"row\">\n                            <div class=\"input-group mb-3\">                          \n                                <input id=\"input-ingresado\" [(ngModel)]=\"nuevoJuego.NumeroUnoIngresado\" type=\"number\"\n                                    class=\"form-control\" placeholder=\"Ingrese un Numero:\"\n                                    aria-label=\"Ingrese un Numero:\" aria-describedby=\"button-addon2\">\n                                <div [hidden]=\"ocultarVerificar\" class=\"input-group-append\">\n                                    <button class=\"btn btn-success\" type=\"button\" id=\"button-verificar\"\n                                        (click)=\"verificarUsr()\">Verificar</button>\n                                </div>\n                            </div>\n                        </div>\n                        <p><i class=\"fa fa-spinner fa-spin\">\n                            </i> Ingrese algunos de los numeros mostrados anteriormente !</p>           \n               </div>\n            </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu-card/menu-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu-card/menu-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"card\" style=\"width: 16rem;\">\n        <a routerLink=\"/Juegos/Agilidad\">\n            <img src=\"./././assets/imagenes/agilidad.png\" class=\"card-body\" alt=\"agilidad-mental\">\n        </a>\n    </div>\n    <div class=\"card\" style=\"width: 16rem;\">\n        <a routerLink=\"/Juegos/PiedraPapelTijera\">\n            <img src=\"./././assets/imagenes/PiedraPapelTijera.png\" class=\"card-body\" alt=\"piedra-papel-tijera\">\n        </a>     \n    </div>\n    <div class=\"card\" style=\"width: 16rem;\">\n        <a routerLink=\"/Juegos/Adivina\">\n        <img src=\"./././assets/imagenes/adivina.png\" class=\"card-body\" alt=\"adivina-el-numero\" >\n        </a>\n    </div>\n    <div class=\"card\" style=\"width: 16rem;\">\n        <a routerLink=\"/Juegos/Memoria\">\n            <img src=\"./././assets/imagenes/memoria.png\" class=\"card-body\" alt=\"Memoria\">\n        </a>\n    </div>\n    <div class=\"card\" style=\"width: 16rem;\">\n        <a routerLink=\"/Juegos/Anagrama\">\n        <img src=\"./././assets/imagenes/anagrama.png\" class=\"card-body\" alt=\"anagrama\">\n        </a>\n    </div>\n    <div class=\"card\" style=\"width: 16rem;\">\n        <a routerLink=\"/Juegos/Tateti\">\n        <img src=\"./././assets/imagenes/tateti.png\" class=\"card-body\" alt=\"tateti\">\n        </a>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" routerLink=\"/Juegos\"><b>Sala de Juegos</b></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\n          <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" disabled role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-gamepad\"></i> Juegos</a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/Juegos/Agilidad\">Agilidad</a>\n            <a class=\"dropdown-item\" routerLink=\"/Juegos/Adivina\">Adivina</a>\n            <a class=\"dropdown-item\" routerLink=\"/Juegos/PiedraPapelTijera\">Piedra Papel o Tijera</a>\n            <a class=\"dropdown-item\" routerLink=\"/Juegos/Memoria\">Memoria</a>\n            <a class=\"dropdown-item\" routerLink=\"/Juegos/Anagrama\">Anagrama</a>\n            <a class=\"dropdown-item\" routerLink=\"/Juegos/Tateti\">TaTeTi</a>\n\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/Resultados\"><i class=\"fa fa-trophy\"></i> Resultados</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/Jugadores\"><i class=\"fa fa-users\"></i> Jugadores</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/QuienSoy\"><i class=\"fa fa-user-secret\"></i> ¿Quién\n            soy?</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"http://github.com/arielzamora\" target=\"_blank\"><i class=\"fa fa-github\"></i>\n            Github</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <span *ngIf=\"logueado\" class=\"navbar-text\">|| <i class=\"fa fa-user\"></i> {{nombreUsuario}} || </span> \n        <li *ngIf=\"!logueado\" class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/Login\"><i class=\"fa fa-sign-in\"></i> Conectarse</a></li>\n        <li *ngIf=\"logueado\" class=\"nav-item\"><a class=\"nav-link\" (click)=\"Logout()\"><i class=\"fa fa-sign-out\"></i> Desconectarse</a></li>\n      </ul>\n    </div>\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-4\">{{nuevoJuego.nombre}}</h1>\n        <br>\n        <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"en-juego col-12\" *ngIf=\"enJuego\">\n                    <div class=\"label-jugadores row\">\n                        <label class=\"col-12\">\n                            <p>\n                                <i class=\"fa fa-spinner fa-spin\">\n                                </i> Elija su jugada</p>\n                        </label>\n                    </div>\n                    <div class=\"row\">\n                            <div class=\"col-4\">\n                                <img (click)=\"detener(1)\" class=\"imagen-elegir-jugada\" src=\"./././assets/imagenes/piedra.png\"\n                                    alt=\"piedra\">\n                            </div>\n                            <div class=\"col-4\">\n                                    <img (click)=\"detener(2)\" class=\"imagen-elegir-jugada\" src=\"./././assets/imagenes/papel.png\"\n                                    alt=\"papel\">\n                            </div>\n                            <div class=\"col-4\">\n                                <img (click)=\"detener(3)\" class=\"imagen-elegir-jugada\" src=\"./././assets/imagenes/tijera.png\"\n                                    alt=\"tijera\">\n                            </div>                   \n                    </div>\n       </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"label-jugadores row\">\n            <p class=\"col-4\"><b>Jugador</b></p>\n            <p class=\"col-4\"><b>Oponente</b></p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <img class=\"imagen-jugada\" src={{imagenJugadaUsario}} alt=\"\">\n            </div>\n            <div class=\"col-4\">\n                <img class=\"imagen-jugada\" src={{imagenJugada}} alt=\"\">\n            </div>\n        </div>\n    </div>\n     </div>\n        <br>\n       \n        <div class=\"row\" *ngIf=\"!enJuego\">\n            <p><button (click)=\"nuevo()\" class=\"btn btn-primary btn-lg\" type=\"button\" id=\"button-nuevo\">\n                    Nuevo juego</button></p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <div class=\"carousel-inner\">\r\n          <div class=\"carousel-item \">\r\n              <div class=\"row\">\r\n                  <div class=\"col\">\r\n                        <div class=\"card\" style=\"width: 16rem;\">\r\n                                <a routerLink=\"/Juegos/Agilidad\">\r\n                                    <img src=\"./././assets/imagenes/agilidad.png\"  alt=\"agilidad-mental\">\r\n                                </a>\r\n                        </div>        \r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"carousel-caption d-none d-md-block\">\r\n                            <h3>Agilidad Aritmetica</h3>\r\n                            <p>calcula rapidamente la operacion dada</p>\r\n                        </div>\r\n                     </div>\r\n              </div>\r\n                \r\n           </div>\r\n             <div class=\"carousel-item active \">\r\n                    <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"card\" style=\"width: 16rem;\">\r\n                                        <a routerLink=\"/Juegos/Memoria\">\r\n                                            <img src=\"./././assets/imagenes/memoria.png\"  alt=\"Memoria\">\r\n                                        </a>\r\n                                </div>  \r\n                            </div>    \r\n                            <div class=\"col\">\r\n                                <div class=\"carousel-caption d-none d-md-block\">\r\n                                    <h3>Memoria</h3>\r\n                                    <p>El consiste en memorizar un numero rapidamente</p>\r\n                                </div>\r\n                            </div>  \r\n                      </div>\r\n                        \r\n            </div>\r\n            <div class=\"carousel-item \">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"card\" style=\"width: 16rem;\">\r\n                                    <a routerLink=\"/Juegos/PiedraPapelTijera\">\r\n                                        <img src=\"./assets/imagenes/PiedraPapelTijera.png\"  alt=\"piedra-papel-tijera\">\r\n                                    </a>   \r\n                             </div>      \r\n                        </div>\r\n                        <div class=\"col\">  \r\n                                <div class=\"carousel-caption d-none d-md-block\">\r\n                                    <h3>Piedra Papel y Tijera</h3>\r\n                                    <p>Clasico juego donde se selecciona una imagen y juega contra la PC</p>\r\n                                </div>\r\n                             </div>\r\n                      </div>\r\n            </div>\r\n         \r\n          <div class=\"carousel-item\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                            <div class=\"card\" style=\"width: 16rem;\">\r\n                                    <a routerLink=\"/Juegos/Adivina\">\r\n                                        <img src=\"./././assets/imagenes/adivina.png\"  alt=\"adivina-el-numero\" >\r\n                                </a>  \r\n                            </div>    \r\n                        </div>    \r\n                        <div class=\"col\">\r\n                            <div class=\"carousel-caption d-none d-md-block\">\r\n                                <h3>Adivina</h3>\r\n                                <p>se debe adivinar un numero</p>\r\n                            </div>\r\n                        </div>\r\n                  </div>\r\n\r\n          </div>\r\n          <div class=\"carousel-item\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"card\" style=\"width: 16rem;\">\r\n                                <a routerLink=\"/Juegos/Anagrama\">\r\n                                    <img src=\"./././assets/imagenes/anagrama.png\"  alt=\"anagrama\">\r\n                               </a>\r\n                         </div>      \r\n                        </div>\r\n                        <div class=\"col\">  \r\n                         <div class=\"carousel-caption d-none d-md-block\">\r\n                              <h3>Anagrama</h3>\r\n                              <p>se escribir un anagrama </p>\r\n                         </div>\r\n                         </div>\r\n                  </div>\r\n           </div>\r\n           <div class=\"carousel-item\">           \r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                            <div class=\"card\" style=\"width: 16rem;\">\r\n                                    <a routerLink=\"/Juegos/Tateti\">\r\n                                        <img  src=\"./././assets/imagenes/tateti.png\"  alt=\"tateti\">\r\n                                        </a>\r\n                            </div>    \r\n                        </div>\r\n                        <div class=\"col\">    \r\n                            <div class=\"carousel-caption d-none d-md-block\">\r\n                                <h3>Tateti</h3>\r\n                                <p>Juega al Tateti contra la PC</p>\r\n                            </div>\r\n                        </div>\r\n                  </div>\r\n            </div>\r\n        </div>\r\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"jumbotron\">\n      <!--<h1 class=\"display-4\">{{nuevoJuego.nombre}}</h1>-->\n      <br>\n  \n    <div id =\"quiwn\">\n      <h3 class=\"margin\">Quién Soy?</h3>\n      <img src=\"./././assets/imagenes/quiensoy.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\n      <h3>Soy Un alumno de la UTN FRA</h3>\n    </div>\n  </div>\n  </div>\n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\" >\n  <div class=\"jumbotron\" style=\"padding:50px;\">\n  \n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitLogin()\">\n        <div class=\"imgcontainer\">\n            <img src=\"./././assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\n          </div>\n      <div class=\"container\">\n        <label><b>Usuario</b></label>\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"mail\"  formControlName=\"mail\" required>\n        <ng-container *ngFor=\"let validation of validation_messages.mail\">\n          <div *ngIf=\"form.get('mail').hasError(validation.type) && (form.get('mail').dirty || form.get('mail').touched)\">\n            <label color=\"danger\"> {{ validation.message }} </label>\n          </div>\n        </ng-container>\n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"password\" formControlName=\"password\" required>\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\n          <div\n            *ngIf=\"form.get('password').hasError(validation.type) && (form.get('password').dirty || form.get('password').touched)\">\n            <label color=\"danger\"> {{ validation.message }} </label>\n          </div>\n        </ng-container> \n        <label><b>Reingrese clave</b></label>\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"password2\" formControlName=\"password2\" required>\n        <ng-container *ngFor=\"let validation of validation_messages.password2\">\n          <div\n            *ngIf=\"form.get('password2').hasError(validation.type) && (form.get('password2').dirty || form.get('password2').touched)\">\n            <label color=\"danger\"> {{ validation.message }} </label>\n          </div>\n        </ng-container> \n          \n        <button type=\"button\" class=\"btn btn-success\" type=\"submit\" [disabled]=\"!form.valid\">Aceptar</button>\n        <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/Registro\">Cancelar</button>\n      </div>    \n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tateti/tateti.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tateti/tateti.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-4\">{{nuevoJuego.nombre}}</h1>\n        <br>\n        <div *ngIf=\"turnoJugador && !nuevoJuego.juegoTerminado\" class=\"row\">\n            <label class=\"col-12\">\n                <p><i class=\"fa fa-spinner fa-spin\">\n                    </i> Realice una jugada</p>\n            </label>\n        </div>\n        <div *ngIf=\"enJuego\" class=\"row tablero\">\n            <table class=\"table table-bordered col-sm-10 col-md-6 col-lg-6\">\n                <tbody>\n                    <tr>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(0,0,false)\">\n                            <img src={{this.nuevoJuego.tablero[0][0]}} alt=\"\">\n                        </td>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(0,1,false)\">\n                            <img src={{this.nuevoJuego.tablero[0][1]}} alt=\"\">\n                        </td>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(0,2,false)\">\n                            <img src={{this.nuevoJuego.tablero[0][2]}} alt=\"\">\n                        </td>\n                    </tr>\n                    <tr id=\"center-row\">\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(1,0,false)\">\n                            <img src={{this.nuevoJuego.tablero[1][0]}} alt=\"\">\n                        </td>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(1,1,false)\">\n                            <img src={{this.nuevoJuego.tablero[1][1]}} alt=\"\">\n                        </td>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(1,2,false)\">\n                            <img src={{this.nuevoJuego.tablero[1][2]}} alt=\"\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(2,0,false)\">\n                            <img src={{this.nuevoJuego.tablero[2][0]}} alt=\"\">\n                        </td>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(2,1,false)\">\n                            <img src={{this.nuevoJuego.tablero[2][1]}} alt=\"\">\n                        </td>\n                        <td class=\"borde-right\" (click)=\"this.marcarJugada(2,2,false)\">\n                            <img src={{this.nuevoJuego.tablero[2][2]}} alt=\"\">\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"row\" *ngIf=\"nuevoJuego.juegoTerminado\">\n            <p><button (click)=\"nuevo()\" class=\"btn btn-primary btn-lg\" type=\"button\" id=\"button-nuevo\">\n                    Nuevo juego</button></p>\n        </div>\n    </div>\n</div>\n ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('PrincipalPage <=> LoginPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-100%' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '100%' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true }),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> LoginPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-100%' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '100%' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true }),
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_memoria_numerica_memoria_numerica_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/memoria-numerica/memoria-numerica.component */ "./src/app/componentes/memoria-numerica/memoria-numerica.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_nologin_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/nologin.guard */ "./src/app/guards/nologin.guard.ts");






















const routes = [
    { path: '', redirectTo: '/Principal', pathMatch: 'full' },
    { path: 'Principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_3__["PrincipalComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]], data: { animation: 'PrincipalPage' } },
    { path: 'Jugadores', component: _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_13__["JugadoresListadoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'Login', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], canActivate: [_guards_nologin_guard__WEBPACK_IMPORTED_MODULE_21__["NologinGuard"]], data: { animation: 'LoginPage' } },
    { path: 'Mapa', component: _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_14__["MapaDeGoogleComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'QuienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_15__["QuienSoyComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]], data: { animation: 'LoginPage' } },
    { path: 'Registro', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_16__["RegistroComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
    { path: 'Listado', component: _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_17__["ListadoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]], data: { animation: 'LoginPage' } },
    { path: 'Paises', component: _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_18__["ListadoDePaisesComponent"] },
    { path: 'Resultados', component: _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_19__["ListadoDeResultadosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]], data: { animation: 'LoginPage' } },
    {
        path: 'Juegos',
        component: _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_4__["JuegosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]], data: { animation: 'LoginPage' },
        children: [
            { path: '', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_5__["MenuCardComponent"] },
            { path: 'Agilidad', component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__["AgilidadAritmeticaComponent"] },
            { path: 'PiedraPapelTijera', component: _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_7__["PiedraPapelTijeraComponent"] },
            { path: 'Adivina', component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_8__["AdivinaElNumeroComponent"] },
            { path: 'Memoria', component: _componentes_memoria_numerica_memoria_numerica_component__WEBPACK_IMPORTED_MODULE_9__["MemoriaComponent"] },
            { path: 'Anagrama', component: _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_10__["AnagramaComponent"] },
            { path: 'Tateti', component: _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_11__["TatetiComponent"] },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#page-container {\r\n    position: relative;\r\n    min-height: 85vh;\r\n}\r\n  \r\n#content-wrap {\r\n    padding-bottom: 2.5rem;    /* Footer height */\r\n}\r\n  \r\n#footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 2.5rem;            /* Footer height */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCLEtBQUssa0JBQWtCO0FBQ2pEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYyxhQUFhLGtCQUFrQjtBQUNqRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDg1dmg7XHJcbn1cclxuICBcclxuI2NvbnRlbnQtd3JhcCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtOyAgICAvKiBGb290ZXIgaGVpZ2h0ICovXHJcbn1cclxuICBcclxuI2Zvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMi41cmVtOyAgICAgICAgICAgIC8qIEZvb3RlciBoZWlnaHQgKi9cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");



let AppComponent = class AppComponent {
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [
            _animations__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicios/mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./servicios/paises.service */ "./src/app/servicios/paises.service.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./servicios/archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_memoria_numerica_memoria_numerica_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./componentes/memoria-numerica/memoria-numerica.component */ "./src/app/componentes/memoria-numerica/memoria-numerica.component.ts");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./componentes/input-jugadores/input-jugadores.component */ "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./componentes/footer/footer.component */ "./src/app/componentes/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./servicios/database.service */ "./src/app/servicios/database.service.ts");











//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';






































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_8__["AdivinaElNumeroComponent"],
            _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_9__["ListadoDeResultadosComponent"],
            _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"],
            _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_17__["PrincipalComponent"],
            _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_18__["AgilidadAritmeticaComponent"],
            _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_19__["MenuComponent"],
            _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_20__["AdivinaMasListadoComponent"],
            _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_21__["AgilidadMasListadoComponent"],
            _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_22__["ListadoComponent"],
            _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_25__["ListadosComponent"],
            _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_26__["JuegosComponent"],
            _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_27__["RegistroComponent"],
            _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_28__["MenuCardComponent"],
            _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_29__["CabeceraComponent"],
            _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_30__["QuienSoyComponent"],
            _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_31__["AnagramaComponent"],
            _componentes_memoria_numerica_memoria_numerica_component__WEBPACK_IMPORTED_MODULE_32__["MemoriaComponent"],
            _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_33__["PiedraPapelTijeraComponent"],
            _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_34__["TatetiComponent"],
            _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_35__["ListadoDePaisesComponent"],
            _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_36__["MapaDeGoogleComponent"],
            _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_23__["JugadoresListadoComponent"],
            _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_38__["InputJugadoresComponent"],
            _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_39__["SexoPipe"],
            _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_46__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_47__["AppRoutingModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_37__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
            }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_42__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_45__["firebaseConfig"]),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_40__["AngularFireAuthModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_41__["AngularFireDatabaseModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_43__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_44__["AngularFireStorageModule"]
        ],
        providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_24__["JuegoServiceService"],
            _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_12__["MiHttpService"],
            _servicios_paises_service__WEBPACK_IMPORTED_MODULE_13__["PaisesService"],
            _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_15__["ArchivosJugadoresService"],
            _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_14__["JugadoresService"],
            _servicios_database_service__WEBPACK_IMPORTED_MODULE_48__["DatabaseService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoAdivina extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(databaseService) {
        super(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juegos"].AdivinaElNumero, databaseService);
        this.numeroSecreto = 0;
        this.numeroIngresado = 0;
        this.gano = false;
        //this.tiempoRestante = 0;
        //this.tecla = "?";
    }
    Jugar() {
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].Jugando;
        this.ComenzarCronometro();
        this.generarNumero();
    }
    verificar() {
        if (this.numeroIngresado == this.numeroSecreto)
            this.gano = true;
        this.estadoJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["EstadoJuego"].Gano;
        this.FinalizarCronometro();
        clearInterval(this.intervalo);
        this.finDelJuego();
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    finDelJuego() {
        this.GuardarResultado();
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].NoJugando;
    }
    generarNumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        // console.info('numero Secreto:' + this.numeroSecreto);
        this.estadoJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["EstadoJuego"].Nada;
    }
    retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasaste";
    }
}


/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoAgilidad extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(databaseService) {
        super(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juegos"].AgilidadAritmetica, databaseService);
        this.operadores = ["+", "-", "*"];
        this.operandoUno = 0;
        this.numeroIngresado = 0;
        this.gano = false;
    }
    Jugar() {
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].Jugando;
        this.ComenzarCronometro();
        //&this.generarNumero();
    }
    generarOperacion() {
        this.operandoUno = Math.floor((Math.random() * 20) + 1);
        this.operandoDos = Math.floor((Math.random() * 10) + 1);
        this.operador = this.operadores[Math.floor(Math.random() * this.operadores.length)];
        this.resultado = this.calcular();
        console.info(this.operandoUno, this.operador, this.operandoDos, "=", this.resultado);
    }
    calcular() {
        let result;
        switch (this.operador) {
            case "+":
                result = this.operandoUno + this.operandoDos;
                break;
            case "-":
                result = this.operandoUno - this.operandoDos;
                break;
            case "*":
                result = this.operandoUno * this.operandoDos;
                break;
        }
        return result;
    }
    verificar() {
        if (this.numeroIngresado == this.resultado)
            this.gano = true;
        return this.gano;
    }
    reset() {
        this.operador = "";
        this.operandoUno = 0;
        this.operandoDos = 0;
        this.resultado = 0;
        this.numeroIngresado = 0;
        this.gano = false;
    }
}


/***/ }),

/***/ "./src/app/clases/juego-anagrama.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-anagrama.ts ***!
  \******************************************/
/*! exports provided: JuegoAnagrama */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAnagrama", function() { return JuegoAnagrama; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoAnagrama extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(databaseService) {
        super(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juegos"].AdivinaElNumero, databaseService);
        this.diccionario = {
            "ARBOL": { anagramas: ["ALBOR", "BOLAR", "BORLA", "LABOR", "LABRO", "RALBO", "ROBLA"] },
            "CASA": { anagramas: ["ACAS", "ASCA", "SACA"] },
            "CIELO": { anagramas: ["LICEO"] },
            "GATO": { anagramas: ["GOTA", "TOGA"] },
            "LAPICERO": { anagramas: ["COPILARE", "COPLERIA", "POLARICE", "RECOPILA"] },
            "ALBOR": { anagramas: ["ARBOL", "BOLAR", "BORLA", "LABOR", "LABRO", "RALBO", "ROBLA"] },
            "ACAS": { anagramas: ["CASA", "ASCA", "SACA"] },
            "LICEO": { anagramas: ["CIELO", "CELIO"] },
            "MACRI": { anagramas: ["GOTA", "TOGA", "GATO"] },
        };
        this.diccionarioAnagramas = {
            1: { palabra: "ARBOL" },
            2: { palabra: "CASA" },
            3: { palabra: "CIELO" },
            4: { palabra: "GATO" },
            5: { palabra: "LAPICERO" },
            6: { palabra: "ALBOR" },
            7: { palabra: "ACAS" },
            8: { palabra: "LICEO" },
            9: { palabra: "MACRI" },
        };
        this.palabraSeleccionada = "";
        this.palabraIngresada = "";
        this.palabra = "";
        this.cantidadPalabras = 9;
        this.gano = false;
        this.palabraRandom();
    }
    Jugar() {
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].Jugando;
        this.ComenzarCronometro();
        //&this.generarNumero();
    }
    palabraRandom() {
        var randomNumber = Math.floor(Math.random() * this.cantidadPalabras);
        this.palabra = this.diccionarioAnagramas[randomNumber].palabra.toString();
        this.palabraSeleccionada = this.palabra;
    }
    verificar() {
        this.diccionario[this.palabraSeleccionada].anagramas.forEach((ana) => {
            if (this.palabraIngresada.toUpperCase() == ana)
                this.gano = true;
        });
        return this.gano;
    }
    reset() {
        //this.palabraSeleccionada = "";
        this.palabraIngresada = "";
        this.gano = false;
        this.palabraRandom();
    }
    finDelJuego() {
        this.GuardarResultado();
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].NoJugando;
    }
}


/***/ }),

/***/ "./src/app/clases/juego-memoria.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-memoria.ts ***!
  \*****************************************/
/*! exports provided: JuegoMemoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoMemoria", function() { return JuegoMemoria; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoMemoria extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(databaseService) {
        super(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juegos"].AdivinaElNumero, databaseService);
        this.diccionarioNumeros = {
            1: { numeros: [2569, 2354, 6589] },
            2: { numeros: [1579, 1953, 3779] },
            3: { numeros: [3569, 7854, 3589] },
            4: { numeros: [2119, 2334, 6579] },
            5: { numeros: [2569, 2312, 6589] },
            6: { numeros: [2739, 2311, 9589] },
            7: { numeros: [2566, 1555, 6579] },
            8: { numeros: [2555, 2354, 9739] },
            9: { numeros: [2539, 9674, 1589] },
        };
        this.palabra = "";
        this.cantidadNumeros = 9;
        this.gano = false;
        //this.tiempoRestante = 0;
        //this.tecla = "?";
        this.Jugar();
    }
    Jugar() {
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].Jugando;
        this.ComenzarCronometro();
        this.numerosRandom();
    }
    numerosRandom() {
        this.randomNumber = Math.floor(Math.random() * this.cantidadNumeros);
        this.numerosSeleccionado = this.diccionarioNumeros[this.randomNumber].numeros;
    }
    verificar() {
        this.diccionarioNumeros[this.randomNumber].numeros.forEach((ana) => {
            if (this.NumeroUnoIngresado == ana)
                this.gano = true;
        });
        return this.gano;
    }
    reset() {
        //this.palabraSeleccionada = "";
        this.NumeroUnoIngresado = 0;
        this.gano = false;
        this.numerosRandom();
    }
    finDelJuego() {
        this.GuardarResultado();
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].NoJugando;
    }
}


/***/ }),

/***/ "./src/app/clases/juego-piedra-papel-tijera.ts":
/*!*****************************************************!*\
  !*** ./src/app/clases/juego-piedra-papel-tijera.ts ***!
  \*****************************************************/
/*! exports provided: JuegoPiedraPapelTijera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoPiedraPapelTijera", function() { return JuegoPiedraPapelTijera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoPiedraPapelTijera extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(databaseService) {
        super(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juegos"].AdivinaElNumero, databaseService);
        this.jugadas = [1, 2, 3];
        this.jugada = 0;
        this.jugadaUsuario = 0;
        this.resultado = -2; // no se inicio el juego
        this.gano = false;
        //this.tiempoRestante = 0;
        //this.tecla = "?";
    }
    Jugar() {
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].Jugando;
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
    verificarJugada() {
        switch (this.jugadaUsuario) {
            case 1: // PIEDRA
                if (this.jugada == 1) {
                    this.resultado = 0; // empate
                }
                else {
                    if (this.jugada == 2)
                        this.resultado = -1; // usr pierde
                    else
                        this.resultado = 1; // usr gana
                }
                break;
            case 2: // PAPEL
                if (this.jugada == 1) {
                    this.resultado = 1; // usr gana
                }
                else {
                    if (this.jugada == 2)
                        this.resultado = 0; // empate
                    else
                        this.resultado = -1; // usr pierde
                }
                break;
            case 3: // TIJERA
                if (this.jugada == 1) {
                    this.resultado = -1; // usr pierde
                }
                else {
                    if (this.jugada == 2)
                        this.resultado = 1; // usr gana
                    else
                        this.resultado = 0; // empate
                }
                break;
        }
        this.verificar();
    }
    verificar() {
        if (this.resultado)
            this.gano = true;
        this.reset();
        return this.gano;
    }
    reset() {
        this.jugada = 0;
        this.jugadaUsuario = 0;
    }
    finDelJuego() {
        this.GuardarResultado();
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].NoJugando;
    }
}


/***/ }),

/***/ "./src/app/clases/juego-tateti.ts":
/*!****************************************!*\
  !*** ./src/app/clases/juego-tateti.ts ***!
  \****************************************/
/*! exports provided: JuegoTateti */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoTateti", function() { return JuegoTateti; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");


class JuegoTateti extends _clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juego"] {
    constructor(databaseService) {
        super(_clases_juego__WEBPACK_IMPORTED_MODULE_1__["Juegos"].AdivinaElNumero, databaseService);
        this.tablero = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        this.jugadaUsuario = 0;
        this.juegoTerminado = true;
        this.gano = false;
        //this.tiempoRestante = 0;
        //this.tecla = "?";
    }
    Jugar() {
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].Jugando;
        this.ComenzarCronometro();
    }
    verificarTresEnLinea(marca) {
        if ( //horizontales
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
    verificar() {
        if (this.juegoTerminado && this.gano)
            return true;
        else
            return false;
    }
    reset() {
        this.gano = false;
        this.tablero = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        console.info("tablero: ", this.tablero);
    }
    finDelJuego() {
        this.GuardarResultado();
        this.modoDeJuego = _clases_juego__WEBPACK_IMPORTED_MODULE_1__["ModoDeJuego"].NoJugando;
    }
}
// generarJugada(jugadaUsr) {
//     switch (jugadaUsr) {
//         case jugadaUsr[[0][0]]:
//             this.jugadas = [[0][1],[1][1],[2][0]]
//             this.jugada = this.jugadas[Math.floor(Math.random() * this.jugadas.length)];
//             row = (Math.random() * 2)
//             col = (Math.random() * 2)
//             break
//         case jugadaUsr[[0][1]]:
//             break
//         case jugadaUsr[[0][2]]:
//             break
//         case jugadaUsr[[1][0]]:
//             break
//         case jugadaUsr[[1][1]]:
//             break
//         case jugadaUsr[[1][2]]:
//             break
//         case jugadaUsr[[2][0]]:
//             break
//         case jugadaUsr[[2][1]]:
//             break
//         case jugadaUsr[[2][2]]:
//             break
//         case jugadaUsr[[0][0], [0][0]]:
//             break
//         case jugadaUsr[[0][0], [0][1]]:
//             break
//         case jugadaUsr[[0][0], [0][2]]:
//             break
//         case jugadaUsr[[0][0], [1][0]]:
//             break
//         case jugadaUsr[[0][0], [1][1]]:
//             break
//         case jugadaUsr[[0][0], [1][2]]:
//             break
//         case jugadaUsr[[0][0], [2][0]]:
//             break
//         case jugadaUsr[[0][0], [2][1]]:
//             break
//         case jugadaUsr[[0][0], [2][2]]:
//             break
//     }
// }


/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: ModoDeJuego, EstadoJuego, Juegos, Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModoDeJuego", function() { return ModoDeJuego; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoJuego", function() { return EstadoJuego; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juegos", function() { return Juegos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ModoDeJuego;
(function (ModoDeJuego) {
    ModoDeJuego[ModoDeJuego["Jugando"] = 1] = "Jugando";
    ModoDeJuego[ModoDeJuego["NoJugando"] = 2] = "NoJugando";
})(ModoDeJuego || (ModoDeJuego = {}));
var EstadoJuego;
(function (EstadoJuego) {
    EstadoJuego[EstadoJuego["Gano"] = 1] = "Gano";
    EstadoJuego[EstadoJuego["Perdio"] = 2] = "Perdio";
    EstadoJuego[EstadoJuego["Nada"] = 3] = "Nada";
})(EstadoJuego || (EstadoJuego = {}));
var Juegos;
(function (Juegos) {
    Juegos["Memoria"] = "Memoria";
    Juegos["AdivinaElNumero"] = "Adivina el N\u00FAmero";
    Juegos["AgilidadAritmetica"] = "Agilidad Aritm\u00E9tica";
    Juegos["PiedraPapelTijera"] = "Piedra, Papel o Tijera";
    Juegos["Anagrama"] = "Anagrama";
    Juegos["TaTeTi"] = "TaTeTi";
})(Juegos || (Juegos = {}));
class Juego {
    constructor(juego, databaseService) {
        this.modoDeJuego = ModoDeJuego.NoJugando;
        this.ultimoPuntaje = 0;
        //this.vidasRestantes = vidasRestantes;
        this.minutosTranscurridos = 0;
        this.segundosTranscurridos = 0;
        this.estadoJuego = EstadoJuego.Nada;
        //this.juego = nombre;
        //this.databaseService = databaseService;
    }
    ComenzarCronometro() {
        let horaInicio = new Date();
        this.intervaloTiempo = setInterval(() => {
            let horaActual = new Date();
            let diferencia = Math.abs(horaActual.getTime() - horaInicio.getTime());
            ;
            let tiempoTranscurrido = new Date(diferencia);
            this.minutosTranscurridos = tiempoTranscurrido.getMinutes();
            this.segundosTranscurridos = tiempoTranscurrido.getSeconds();
        }, 1000);
    }
    FinalizarCronometro() {
        clearInterval(this.intervaloTiempo);
    }
    GuardarResultado() {
        //this.databaseService.GuardarResultados(this.jugador,this.ultimoPuntaje,this.minutosTranscurridos,this.segundosTranscurridos,this.juego);
    }
}


/***/ }),

/***/ "./src/app/clases/jugador.ts":
/*!***********************************!*\
  !*** ./src/app/clases/jugador.ts ***!
  \***********************************/
/*! exports provided: Jugador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jugador", function() { return Jugador; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Jugador {
    constructor(usuario, gano, juego, puntaje) {
        this.usuario = usuario;
        this.gano = gano;
        this.juego = juego;
        this.puntaje = puntaje;
    }
}


/***/ }),

/***/ "./src/app/clases/resultado.ts":
/*!*************************************!*\
  !*** ./src/app/clases/resultado.ts ***!
  \*************************************/
/*! exports provided: Resultado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resultado", function() { return Resultado; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Resultado {
    constructor(fecha, juego, minutosTranscurridos, segundosTranscurridos, puntaje, nombre) {
        this.fecha = fecha;
        this.juego = juego;
        this.minutos = minutosTranscurridos;
        this.segundos = segundosTranscurridos;
        this.puntaje = puntaje;
        this.nombre = nombre;
    }
}


/***/ }),

/***/ "./src/app/clases/roles.enum.ts":
/*!**************************************!*\
  !*** ./src/app/clases/roles.enum.ts ***!
  \**************************************/
/*! exports provided: Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["invitado"] = 1] = "invitado";
    Roles[Roles["anonimo"] = 2] = "anonimo";
    Roles[Roles["tester"] = 3] = "tester";
    Roles[Roles["usuario"] = 4] = "usuario";
})(Roles || (Roles = {}));


/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron{\n    width: 90%;\n    margin: auto;\n}\n\n#button-nuevo{\n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbiNidXR0b24tbnVldm97XG4gXG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/database.service */ "./src/app/servicios/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");







let AdivinaElNumeroComponent = class AdivinaElNumeroComponent {
    constructor(toastr, authService, router, databaseService) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.databaseService = databaseService;
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"](databaseService);
        this.ocultarVerificar = false;
    }
    setInputNumeroIngresado() {
        setTimeout(() => {
            document.getElementById("input-numero-ingresado").value = null;
            document.getElementById("input-numero-ingresado").focus();
        }, 1);
    }
    generarNumeroUsr() {
        this.nuevoJuego.generarNumero();
        this.contador = 0;
        this.setInputNumeroIngresado();
    }
    verificarUsr() {
        this.contador++;
        this.ocultarVerificar = true;
        //console.info("resultado: ", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.mostrarMensaje("Adivinaste el Numero", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            let mensaje;
            switch (this.contador) {
                case 1:
                    mensaje = "Fallaste, vamos de nuevo";
                    break;
                case 2:
                    mensaje = "No, te estarás Acercando???";
                    break;
                case 3:
                    mensaje = "No es, fallaste nuevamente";
                    break;
                case 4:
                    mensaje = "No era el " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = "5 intentos y nada";
                    break;
                case 6:
                    mensaje = "Fallaste nuevamente";
                    break;
                default:
                    mensaje = "Ya fallaste " + this.contador + " veces";
                    break;
            }
            this.mostrarMensaje("#" + this.contador + " " + mensaje + " - Ayuda: " + this.nuevoJuego.retornarAyuda());
        }
        // console.info("resultado: ", this.nuevoJuego.gano);
    }
    mostrarMensaje(mensaje = "este es el msg", ganador = false) {
        this.mensajes = mensaje;
        if (ganador) {
            this.toastr.success(mensaje, "¡Felicitaciones!");
        }
        else {
            this.toastr.error(mensaje, "Seguí participando");
        }
        this.ocultarVerificar = false;
        this.setInputNumeroIngresado();
        this.nuevoJuego.numeroIngresado = 0;
    }
    ngOnInit() {
    }
};
AdivinaElNumeroComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
AdivinaElNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-el-numero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adivina-el-numero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adivina-el-numero.component.css */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
], AdivinaElNumeroComponent);



/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtbWFzLWxpc3RhZG8vYWRpdmluYS1tYXMtbGlzdGFkby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdivinaMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdivinaMasListadoComponent = class AdivinaMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    }
};
AdivinaMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-mas-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adivina-mas-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adivina-mas-listado.component.css */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdivinaMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label ,p\r\n{\r\n    color: blanchedalmond;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtYXJpdG1ldGljYS9hZ2lsaWRhZC1hcml0bWV0aWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtYXJpdG1ldGljYS9hZ2lsaWRhZC1hcml0bWV0aWNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCAscFxyXG57XHJcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/database.service */ "./src/app/servicios/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");







let AgilidadAritmeticaComponent = class AgilidadAritmeticaComponent {
    constructor(toastr, authService, router, databaseService) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.databaseService = databaseService;
        this.enJuego = false;
        this.tiempo = 5;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"](databaseService);
    }
    setInputNumeroIngresado() {
        setTimeout(() => {
            document.getElementById("input-numero-ingresado").value = null;
            document.getElementById("input-numero-ingresado").focus();
        }, 1);
    }
    nuevo() {
        this.setInputNumeroIngresado();
        this.enJuego = true;
        this.nuevoJuego.generarOperacion();
        this.repetidor = setInterval(() => {
            this.tiempo--;
            if (this.tiempo == 0) {
                clearInterval(this.repetidor);
                this.verificar();
                this.tiempo = 5;
            }
        }, 900);
    }
    verificar() {
        if (this.nuevoJuego.verificar()) {
            this.mostrarMensaje("Ganaste", true);
        }
        else {
            this.mostrarMensaje("Perdiste", false);
        }
        this.enJuego = false;
        this.nuevoJuego.reset();
    }
    mostrarMensaje(mensaje = "este es el msg", ganador = false) {
        if (ganador) {
            this.toastr.success(mensaje, "¡Felicitaciones!");
        }
        else {
            this.toastr.error(mensaje, "Seguí participando");
        }
    }
    ngOnInit() {
    }
};
AgilidadAritmeticaComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
AgilidadAritmeticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-aritmetica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agilidad-aritmetica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agilidad-aritmetica.component.css */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
], AgilidadAritmeticaComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FnaWxpZGFkLW1hcy1saXN0YWRvL2FnaWxpZGFkLW1hcy1saXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgilidadMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgilidadMasListadoComponent = class AgilidadMasListadoComponent {
    constructor() { this.listadoParaCompartir = new Array(); }
    ngOnInit() {
    }
    tomarJuegoTerminado(juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    }
};
AgilidadMasListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-mas-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agilidad-mas-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agilidad-mas-listado.component.css */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AgilidadMasListadoComponent);



/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul li:hover{\r\n    color: #ffffff;\r\n    background-color: #007bff;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYW5hZ3JhbWEvYW5hZ3JhbWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2FuYWdyYW1hL2FuYWdyYW1hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCBsaTpob3ZlcntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.ts ***!
  \************************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_anagrama__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-anagrama */ "./src/app/clases/juego-anagrama.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/database.service */ "./src/app/servicios/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");







let AnagramaComponent = class AnagramaComponent {
    constructor(toastr, authService, router, databaseService) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.databaseService = databaseService;
        this.enJuego = false;
        this.ocultarVerificar = false;
        this.nuevoJuego = new _clases_juego_anagrama__WEBPACK_IMPORTED_MODULE_2__["JuegoAnagrama"](databaseService);
    }
    verificarUsr() {
        this.ocultarVerificar = true;
        this.nuevoJuego.verificar();
        this.mostrarMensaje();
    }
    nuevo() {
        this.enJuego = true;
    }
    mostrarMensaje() {
        if (this.nuevoJuego.gano) {
            this.toastr.success("Lo lograste", "Bravo!");
        }
        else {
            this.toastr.error(this.nuevoJuego.palabraIngresada + ", no es anagrama de " + this.nuevoJuego.palabraSeleccionada, "Seguí participando");
        }
        this.enJuego = false;
        this.ocultarVerificar = false;
        this.nuevoJuego.reset();
    }
    ngOnInit() {
    }
};
AnagramaComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
AnagramaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anagrama',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anagrama.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/anagrama/anagrama.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anagrama.component.css */ "./src/app/componentes/anagrama/anagrama.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
], AnagramaComponent);



/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.header\n{\n    height: 70px;    \n    /* background-image: url(\"../../../assets/imagenes/cabecera.jpg\"); */\n    background-position: center;\n    background-repeat: repeat-y;\n    background-size: cover;\n    position: relative;\n    text-align: center;\n    margin-bottom: .5em;\n}\n\n.content{\n    padding: 30px;\n}\n\nh1{\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztJQUVJLFlBQVk7SUFDWixvRUFBb0U7SUFDcEUsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uaGVhZGVyXG57XG4gICAgaGVpZ2h0OiA3MHB4OyAgICBcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VuZXMvY2FiZWNlcmEuanBnXCIpOyAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5cbi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbmgxe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");



let CabeceraComponent = class CabeceraComponent {
    constructor(authService) {
        this.authService = authService;
        this.logueado = false;
    }
    ngOnInit() {
        // this.authService.getAuth().subscribe( auth => {
        //   if(auth){
        //     this.logueado = true;
        //    this.nombreUsuario = auth.displayName;
        //  }
        //  else{
        //    this.logueado = false;
        //  }
        // })
    }
    Logout() {
        this.authService.logout();
    }
};
CabeceraComponent.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cabecera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cabecera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/cabecera/cabecera.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cabecera.component.css */ "./src/app/componentes/cabecera/cabecera.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], CabeceraComponent);



/***/ }),

/***/ "./src/app/componentes/error/error.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/error/error.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");



let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/componentes/error/error.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorComponent);



/***/ }),

/***/ "./src/app/componentes/footer/footer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  bottom: 0;\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  background-color: #343a40;\n  color: rgba(255, 255, 255, 0.5);\n  font-family: inherit;\n  font-weight: 500;\n}\n.footer .container {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyaWVsL0xhYm9yYXRvcmlvIDQvVFAtU2FsYS1kZS1KdWVnb3MtQU5HVUxBUi0tbWFzdGVyL3NyYy9hcHAvY29tcG9uZW50ZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBUkk7RUFTSiwrQkFSUTtFQVNSLG9CQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRElJO0VBQ0ksV0FBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcjogIzM0M2E0MDtcbiRjb2xvclRleHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblxuLmZvb3RlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgY29sb3I6ICRjb2xvclRleHQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbn0iLCIuZm9vdGVyIHtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZm9vdGVyIC5jb250YWluZXIge1xuICBtYXJnaW46IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/componentes/footer/footer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2lucHV0LWp1Z2Fkb3Jlcy9pbnB1dC1qdWdhZG9yZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputJugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputJugadoresComponent", function() { return InputJugadoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputJugadoresComponent = class InputJugadoresComponent {
    constructor() { }
    ngOnInit() {
    }
};
InputJugadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-jugadores',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-jugadores.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/input-jugadores/input-jugadores.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-jugadores.component.css */ "./src/app/componentes/input-jugadores/input-jugadores.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InputJugadoresComponent);



/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2p1ZWdvcy9qdWVnb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.ts ***!
  \********************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JuegosComponent = class JuegosComponent {
    constructor() { }
    ngOnInit() {
    }
};
JuegosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-juegos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./juegos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/juegos/juegos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./juegos.component.css */ "./src/app/componentes/juegos/juegos.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], JuegosComponent);



/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td{\n\n    color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvanVnYWRvcmVzLWxpc3RhZG8vanVnYWRvcmVzLWxpc3RhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9qdWdhZG9yZXMtbGlzdGFkby9qdWdhZG9yZXMtbGlzdGFkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XG5cbiAgICBjb2xvcjogYWxpY2VibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.ts ***!
  \******************************************************************************/
/*! exports provided: JugadoresListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresListadoComponent", function() { return JugadoresListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");



let JugadoresListadoComponent = class JugadoresListadoComponent {
    constructor(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
        this.TraerTodos();
    }
    ngOnInit() {
    }
    TraerTodos() {
        //alert("totos");  
        this.listado = this.miJugadoresServicio.traertodos('jugadores/', 'todos');
    }
    TraerGanadores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
    TraerPerdedores() {
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(data => {
            //console.info("jugadores listado",(data));
            this.listado = data;
        });
    }
};
JugadoresListadoComponent.ctorParameters = () => [
    { type: _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"] }
];
JugadoresListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jugadores-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jugadores-listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/jugadores-listado/jugadores-listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jugadores-listado.component.css */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_2__["JugadoresService"]])
], JugadoresListadoComponent);



/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcGFpc2VzL2xpc3RhZG8tZGUtcGFpc2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListadoDePaisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDePaisesComponent", function() { return ListadoDePaisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/paises.service */ "./src/app/servicios/paises.service.ts");



let ListadoDePaisesComponent = class ListadoDePaisesComponent {
    constructor(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ngOnInit() {
        this.miServicioDePaises.listar()
            .then(datos => {
            console.info("listado de paises", datos);
            this.listadoDePaises = datos;
        });
    }
};
ListadoDePaisesComponent.ctorParameters = () => [
    { type: _servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__["PaisesService"] }
];
ListadoDePaisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-de-paises',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado-de-paises.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-paises/listado-de-paises.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado-de-paises.component.css */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_paises_service__WEBPACK_IMPORTED_MODULE_2__["PaisesService"]])
], ListadoDePaisesComponent);



/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td{\n\n    color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby1kZS1yZXN1bHRhZG9zL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG8tZGUtcmVzdWx0YWRvcy9saXN0YWRvLWRlLXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRke1xuXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/database.service */ "./src/app/servicios/database.service.ts");



let ListadoDeResultadosComponent = class ListadoDeResultadosComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.resultados = databaseService.ListarResultados();
        console.log(this.resultados);
    }
    ngOnInit() {
    }
    ver() {
        console.info(this.listado);
    }
};
ListadoDeResultadosComponent.ctorParameters = () => [
    { type: _servicios_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-de-resultados',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado-de-resultados.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado-de-resultados.component.css */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
], ListadoDeResultadosComponent);



/***/ }),

/***/ "./src/app/componentes/listado/listado.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n/* Set a specific color for each brand */\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGFkby9saXN0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0FBQ2hCO0FBRUEsd0NBQXdDO0FBRXhDLGFBQWE7QUFDYjtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUEsWUFBWTtBQUNaO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YWRvL2xpc3RhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGFsbCBmb250IGF3ZXNvbWUgaWNvbnMgKi9cbi5mYSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBpZiB5b3Ugd2FudCAqL1xuLmZhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi8qIFNldCBhIHNwZWNpZmljIGNvbG9yIGZvciBlYWNoIGJyYW5kICovXG5cbi8qIEZhY2Vib29rICovXG4uZmEtZmFjZWJvb2sge1xuICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUd2l0dGVyICovXG4uZmEtdHdpdHRlciB7XG4gICAgYmFja2dyb3VuZDogIzU1QUNFRTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.ts ***!
  \**********************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");



let ListadoComponent = class ListadoComponent {
    constructor(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ngOnInit() {
    }
    llamaService() {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    }
    llamaServicePromesa() {
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then((listado) => {
            this.listadoParaCompartir = listado;
        });
    }
};
ListadoComponent.ctorParameters = () => [
    { type: _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__["JuegoServiceService"] }
];
ListadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listado/listado.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listado.component.css */ "./src/app/componentes/listado/listado.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_2__["JuegoServiceService"]])
], ListadoComponent);



/***/ }),

/***/ "./src/app/componentes/listados/listados.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhZG9zL2xpc3RhZG9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.ts ***!
  \************************************************************/
/*! exports provided: ListadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosComponent", function() { return ListadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListadosComponent = class ListadosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listados',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listados.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/listados/listados.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listados.component.css */ "./src/app/componentes/listados/listados.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListadosComponent);



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/login/login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n    border: 10px solid black;\n    padding: 20px;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 30%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 200px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUEsb0VBQW9FOztBQUNwRTtJQUNJO09BQ0csY0FBYztPQUNkLFdBQVc7SUFDZDtJQUNBO09BQ0csV0FBVztJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLmNhbmNlbGJ0biB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4uYWNlcHRidG4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY2NEY0O1xufVxuLmltZ2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjRweCAwIDEycHggMDtcbn1cblxuaW1nLmF2YXRhciB7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDBweCkge1xuICAgIHNwYW4ucHN3IHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbGJ0biB7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _clases_roles_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../clases/roles.enum */ "./src/app/clases/roles.enum.ts");







let LoginComponent = class LoginComponent {
    constructor(authService, route, router, formBuilder, toastService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.rolesEnum = _clases_roles_enum__WEBPACK_IMPORTED_MODULE_6__["Roles"];
        this.validation_messages = {
            'mail': [
                { type: 'required', message: 'Debe ingresar un email.' },
                { type: 'email', message: 'Debe ingresar un email válido.' }
            ],
            'password': [
                { type: 'required', message: 'Debe ingresar una contraseña.' }
            ]
        };
        this.form = this.formBuilder.group({
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    onSubmitLogin() {
        this.authService.login(this.form.get('mail').value, this.form.get('password').value)
            .then(res => {
            console.log(res);
            this.router.navigate(['/Principal']);
        })
            .catch(error => {
            console.log(error);
            if (error.code === 'auth/user-not-found') {
                this.toastService.error('Usuario no encontrado.');
            }
            else if (error.code === 'auth/wrong-password') {
                this.toastService.error('Contraseña incorrecta.');
            }
            else {
                this.toastService.error('Ocurrió un error, contáctese con el administrador.');
            }
        });
    }
    cargarDatos(rol) {
        switch (rol) {
            case _clases_roles_enum__WEBPACK_IMPORTED_MODULE_6__["Roles"].admin:
                this.form.get('mail').setValue('admin@admin.com');
                this.form.get('password').setValue('123456');
                break;
            case _clases_roles_enum__WEBPACK_IMPORTED_MODULE_6__["Roles"].invitado:
                this.form.get('mail').setValue('invitado@gmail.com');
                this.form.get('password').setValue('222222');
                break;
            case _clases_roles_enum__WEBPACK_IMPORTED_MODULE_6__["Roles"].usuario:
                this.form.get('mail').setValue('usuario@gmail.com');
                this.form.get('password').setValue('333333');
                break;
            case _clases_roles_enum__WEBPACK_IMPORTED_MODULE_6__["Roles"].anonimo:
                this.form.get('mail').setValue('anonimo@gmail.com');
                this.form.get('password').setValue('444444');
                break;
            case _clases_roles_enum__WEBPACK_IMPORTED_MODULE_6__["Roles"].tester:
                this.form.get('mail').setValue('tester@gmail.com');
                this.form.get('password').setValue('555555');
                break;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    height: 300px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFwYS1kZS1nb29nbGUvbWFwYS1kZS1nb29nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcGEtZGUtZ29vZ2xlL21hcGEtZGUtZ29vZ2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.ts ***!
  \************************************************************************/
/*! exports provided: MapaDeGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaDeGoogleComponent", function() { return MapaDeGoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapaDeGoogleComponent = class MapaDeGoogleComponent {
    constructor() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    ngOnInit() {
    }
};
MapaDeGoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa-de-google',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapa-de-google.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/mapa-de-google/mapa-de-google.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapa-de-google.component.css */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapaDeGoogleComponent);



/***/ }),

/***/ "./src/app/componentes/memoria-numerica/memoria-numerica.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/componentes/memoria-numerica/memoria-numerica.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbW9yaWEtbnVtZXJpY2EvbWVtb3JpYS1udW1lcmljYS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/componentes/memoria-numerica/memoria-numerica.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/memoria-numerica/memoria-numerica.component.ts ***!
  \****************************************************************************/
/*! exports provided: MemoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoriaComponent", function() { return MemoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_memoria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-memoria */ "./src/app/clases/juego-memoria.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/database.service */ "./src/app/servicios/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");







let MemoriaComponent = class MemoriaComponent {
    constructor(toastr, authService, router, databaseService) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.databaseService = databaseService;
        this.enJuego = false;
        this.tiempoCumplido = false;
        this.ocultarVerificar = false;
        this.nuevoJuego = new _clases_juego_memoria__WEBPACK_IMPORTED_MODULE_2__["JuegoMemoria"](databaseService);
        this.tiempoJuego = 3;
    }
    setInputNumeroIngresado() {
        setTimeout(() => {
            document.getElementById("input-ingresado").value = null;
            document.getElementById("input-ingresado").focus();
        }, 1);
    }
    verificarUsr() {
        this.ocultarVerificar = true;
        this.nuevoJuego.verificar();
        this.mostrarMensaje();
    }
    nuevo() {
        this.setInputNumeroIngresado();
        this.enJuego = true;
        this.tiempoCumplido = true;
        //this.nuevoJuego.generarOperacion();
        this.repetidor = setInterval(() => {
            this.tiempoJuego--;
            if (this.tiempoJuego == 0) {
                clearInterval(this.repetidor);
                //this.verificar();
                this.ocultarNumeros();
                this.tiempoJuego = 3;
            }
        }, 900);
    }
    ocultarNumeros() {
        this.tiempoCumplido = false;
        this.toastr.success("Tiempo");
    }
    mostrarMensaje() {
        if (this.nuevoJuego.gano) {
            this.toastr.success("Ganaste!");
        }
        else {
            this.toastr.error(this.nuevoJuego.NumeroUnoIngresado + ", no es un numero mostrado Anteriormente ", "Seguí participando");
        }
        this.enJuego = false;
        this.ocultarVerificar = false;
        this.nuevoJuego.reset();
    }
    ngOnInit() {
    }
};
MemoriaComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
MemoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-memoria-numerica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./memoria-numerica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/memoria-numerica/memoria-numerica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./memoria-numerica.component.css */ "./src/app/componentes/memoria-numerica/memoria-numerica.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
], MemoriaComponent);



/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    img{\n      float: left;\n      width: 6%;\n      margin-right: 2em;\n  }\n  \n\n  .container {\n      padding: 50px 16px;\n      background-image:''\n    }\n  \n\n  .container:after{\n      content: \"\";\n      display: table;\n      clear: both;\n    }\n  \n\n  .card {\n      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n      transition: 0.3s;\n      border-radius: 5px; /* 5px rounded corners */\n      max-width: 250px;\n      height: 250px;\n      margin: 10px;\n      padding-bottom: 10px;\n      float: left;\n      text-align: center;\n    }\n  \n\n  img {\n      border-radius: 5px 5px 0 0;\n      width: 100%;\n      height: 200px;\n    }\n  \n\n  .card-title{\n      padding: 15px 10px 15px 10px;\n      height: 40px;\n    }\n  \n\n  .card-body{\n      padding: 5px;\n    }\n  \n\n  .btn{\n      width: 80%;\n      /* position: relative; */\n      bottom: 1px;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLFdBQVc7TUFDWCxTQUFTO01BQ1QsaUJBQWlCO0VBQ3JCOzs7RUFHQTtNQUNJLGtCQUFrQjtNQUNsQjtJQUNGOzs7RUFFQTtNQUNFLFdBQVc7TUFDWCxjQUFjO01BQ2QsV0FBVztJQUNiOzs7RUFFQTtNQUNFLHVDQUF1QztNQUN2QyxnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUUsd0JBQXdCO01BQzVDLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsWUFBWTtNQUNaLG9CQUFvQjtNQUNwQixXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCOzs7RUFFQTtNQUNFLDBCQUEwQjtNQUMxQixXQUFXO01BQ1gsYUFBYTtJQUNmOzs7RUFFQTtNQUNFLDRCQUE0QjtNQUM1QixZQUFZO0lBQ2Q7OztFQUVBO01BQ0UsWUFBWTtJQUNkOzs7RUFFQTtNQUNFLFVBQVU7TUFDVix3QkFBd0I7TUFDeEIsV0FBVztJQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1ne1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogNiU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgfVxuICBcblxuICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDUwcHggMTZweDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6JydcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lcjphZnRlcntcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiA1cHggcm91bmRlZCBjb3JuZXJzICovXG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtdGl0bGV7XG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAxMHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC1ib2R5e1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgICBcbiAgICAuYnRue1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICAgIGJvdHRvbTogMXB4O1xuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuCardComponent = class MenuCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu-card/menu-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-card.component.css */ "./src/app/componentes/menu-card/menu-card.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuCardComponent);



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenDeMenu{\r\n    width: 80px;\r\n    height: 70px;\r\n    }\r\n    \r\n    .hero-text {\r\n        text-align: center;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        color: #100000;\r\n        }\r\n    \r\n    .navbar{\r\n    margin-bottom: 2em; \r\n}\r\n    \r\n    .navbar-nav{\r\n    float: left;\r\n}\r\n    \r\n    .icon-con-borde{\r\n    border: rgba(255,255,255,.5) solid 1px; \r\n    border-radius: 5px;\r\n    padding: 2px;\r\n    position: relative;\r\n    top: 5px;\r\n    left: 110%;\r\n    height: 32px;\r\n}\r\n    \r\n    @media only screen and (max-width: 980px) {\r\n    .form-inline {\r\n        display: none;\r\n    }\r\n}\r\n    \r\n    @media only screen and (min-width: 980px) {\r\n    .iconos-collapse {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGdDQUFnQztRQUNoQyxjQUFjO1FBQ2Q7O0lBQ1I7SUFDSSxrQkFBa0I7QUFDdEI7O0lBRUE7SUFDSSxXQUFXO0FBQ2Y7O0lBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztJQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0lBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbkRlTWVudXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVyby10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBjb2xvcjogIzEwMDAwMDtcclxuICAgICAgICB9XHJcbi5uYXZiYXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07IFxyXG59XHJcblxyXG4ubmF2YmFyLW5hdntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uaWNvbi1jb24tYm9yZGV7XHJcbiAgICBib3JkZXI6IHJnYmEoMjU1LDI1NSwyNTUsLjUpIHNvbGlkIDFweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6IDExMCU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAgIC5mb3JtLWlubGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkge1xyXG4gICAgLmljb25vcy1jb2xsYXBzZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuComponent = class MenuComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    Juego(tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/componentes/menu/menu.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuComponent);



/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagen-jugada{\n    width: 50%;\n    border: .3em #1eb1b382 solid;\n    border-radius: 10px;\n    margin: .5em 0 .5em 0;\n}\n\n.col-6, .col-4{\n    text-align: center;\n}\n\n.col-4{\n    margin: 0;\n    padding: 10px\n}\n\n.imagen-elegir-jugada{\n    width: 50%;\n    border: .3em  #1eb1b382 solid;\n    border-radius: 10px;\n    margin: .5em 0 .5em 0;\n}\n\n.jumbotron {\n    padding: 1rem 2rem 1rem 2rem;\n}\n\n.label-jugadores{\n    text-align: justify;\n    font-size: 15px;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGllZHJhLXBhcGVsLXRpamVyYS9waWVkcmEtcGFwZWwtdGlqZXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3BpZWRyYS1wYXBlbC10aWplcmEvcGllZHJhLXBhcGVsLXRpamVyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlbi1qdWdhZGF7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXI6IC4zZW0gIzFlYjFiMzgyIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAuNWVtIDAgLjVlbSAwO1xufVxuXG4uY29sLTYsIC5jb2wtNHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2wtNHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweFxufVxuXG4uaW1hZ2VuLWVsZWdpci1qdWdhZGF7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXI6IC4zZW0gICMxZWIxYjM4MiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogLjVlbSAwIC41ZW0gMDtcbn1cblxuLmp1bWJvdHJvbiB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW0gMnJlbTtcbn1cblxuLmxhYmVsLWp1Z2Fkb3Jlc3tcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcblxufVxuIl19 */");

/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PiedraPapelTijeraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedraPapelTijeraComponent", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_piedra_papel_tijera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-piedra-papel-tijera */ "./src/app/clases/juego-piedra-papel-tijera.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/database.service */ "./src/app/servicios/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");







let PiedraPapelTijeraComponent = class PiedraPapelTijeraComponent {
    constructor(toastr, authService, router, databaseService) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.databaseService = databaseService;
        this.stop = false;
        this.enJuego = false;
        this.imagenJugada = './././assets/imagenes/piedra.png';
        this.imagenJugadaUsario = './././assets/imagenes/tijera.png';
        this.nuevoJuego = new _clases_juego_piedra_papel_tijera__WEBPACK_IMPORTED_MODULE_2__["JuegoPiedraPapelTijera"](databaseService);
    }
    nuevo() {
        this.stop = false;
        this.enJuego = true;
        this.repetidor = setInterval(() => {
            this.nuevoJuego.generarJugada();
            this.setImagenes();
            if (this.stop) {
                this.nuevoJuego.jugadaUsuario = this.jugadaSeleccionada;
                this.setImagenes();
                clearInterval(this.repetidor);
                this.verificar();
            }
        }, 80);
    }
    detener(jugada) {
        this.jugadaSeleccionada = jugada;
        this.stop = true;
    }
    verificar() {
        this.nuevoJuego.verificarJugada();
        this.mostrarMensaje();
        this.enJuego = false;
    }
    /**
     *  -1 (usuario pierde)
     *   0 (empate)
     *   1 (usuario gana)
     */
    mostrarMensaje() {
        switch (this.nuevoJuego.resultado) {
            case -1:
                this.toastr.error("Fallaste esta vez", ":( :( :(");
                break;
            case 0:
                this.toastr.warning("Intentalo de nuevo", "Es un empate");
                break;
            case 1:
                this.toastr.success("Ganaste", "¡Felicitaciones!");
                break;
        }
    }
    setImagenes() {
        switch (this.nuevoJuego.jugada) {
            case 1:
                this.imagenJugada = './././assets/imagenes/piedra.png';
                break;
            case 2:
                this.imagenJugada = './././assets/imagenes/papel.png';
                break;
            case 3:
                this.imagenJugada = './././assets/imagenes/tijera.png';
                break;
        }
        switch (this.nuevoJuego.jugadaUsuario) {
            case 0:
                this.imagenJugadaUsario = './././assets/imagenes/question.png';
                break;
            case 1:
                this.imagenJugadaUsario = './././assets/imagenes/piedra.png';
                break;
            case 2:
                this.imagenJugadaUsario = './././assets/imagenes/papel.png';
                break;
            case 3:
                this.imagenJugadaUsario = './././assets/imagenes/tijera.png';
                break;
        }
    }
    ngOnInit() {
    }
};
PiedraPapelTijeraComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
PiedraPapelTijeraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-piedra-papel-tijera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./piedra-papel-tijera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./piedra-papel-tijera.component.css */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
], PiedraPapelTijeraComponent);



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    img{\n        float: left;\n        width: 6%;\n        margin-right: 2em;\n    }\n    \n\n    .container {\n        padding: 50px 16px;\n        background-image:''\n      }\n    \n\n    .container:after{\n        content: \"\";\n        display: table;\n        clear: both;\n      }\n    \n\n    .card {      \n        margin-top: 100px;\n        margin-left: 150px;   \n      }\n    \n\n    img {\n        border-radius: 5px 5px 0 0;\n        width: 100%;\n        height: 250px;\n      }\n    \n\n    .btn{\n        width: 80%;\n        /* position: relative; */\n        bottom: 1px;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsaUJBQWlCO0lBQ3JCOzs7SUFHQTtRQUNJLGtCQUFrQjtRQUNsQjtNQUNGOzs7SUFFQTtRQUNFLFdBQVc7UUFDWCxjQUFjO1FBQ2QsV0FBVztNQUNiOzs7SUFFQTtRQUNFLGlCQUFpQjtRQUNqQixrQkFBa0I7TUFDcEI7OztJQUVBO1FBQ0UsMEJBQTBCO1FBQzFCLFdBQVc7UUFDWCxhQUFhO01BQ2Y7OztJQUlBO1FBQ0UsVUFBVTtRQUNWLHdCQUF3QjtRQUN4QixXQUFXO01BQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9wcmluY2lwYWwvcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbWd7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogNiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgIH1cbiAgICBcblxuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6JydcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbnRhaW5lcjphZnRlcntcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2FyZCB7ICAgICAgXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTUwcHg7ICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICBcbiAgICAgIC5idG57XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgICB9Il19 */");

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrincipalComponent = class PrincipalComponent {
    constructor() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    ngOnInit() {
    }
};
PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/principal/principal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/principal/principal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PrincipalComponent);



/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.bg-1 { \n    background-color: #1abc9c; /* Green */\n    color: #ffffff;\n}\n.bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n}\n.bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n}\n.bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n}\n.navbar-nav  li a:hover {\n    color: #1abc9c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7SUFFWDtBQUNKO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0EsR0FBRyxlQUFlLENBQUM7QUFDbkIsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QjtJQUNJLHlCQUF5QixFQUFFLFVBQVU7SUFDckMsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCLEVBQUUsY0FBYztJQUN6QyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QixFQUFFLGVBQWU7SUFDMUMsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3F1aWVuLXNveS9xdWllbi1zb3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW5EZVF1aWVuU295e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgXG4gICAgfVxuYm9keSB7XG4gICAgZm9udDogMjBweCBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgY29sb3I6ICNmNWY2Zjc7XG59XG5wIHtmb250LXNpemU6IDE2cHg7fVxuLm1hcmdpbiB7bWFyZ2luLWJvdHRvbTogNDVweDt9XG4uYmctMSB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7IC8qIEdyZWVuICovXG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4uYmctMiB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7IC8qIERhcmsgQmx1ZSAqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJnLTMgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSAqL1xuICAgIGNvbG9yOiAjNTU1NTU1O1xufVxuLmJnLTQgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmOyAvKiBCbGFjayBHcmF5ICovXG4gICAgY29sb3I6ICNmZmY7XG59XG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5uYXZiYXIge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG4ubmF2YmFyLW5hdiAgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxYWJjOWMgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuienSoyComponent = class QuienSoyComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuienSoyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quien-soy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quien-soy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/quien-soy/quien-soy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quien-soy.component.css */ "./src/app/componentes/quien-soy/quien-soy.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuienSoyComponent);



/***/ }),

/***/ "./src/app/componentes/registro/registro.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n    border: 10px solid black;\n    padding: 20px;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 30%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n\n@media screen and (max-width: 200px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUEsb0VBQW9FOztBQUNwRTtJQUNJO09BQ0csY0FBYztPQUNkLFdBQVc7SUFDZDtJQUNBO09BQ0csV0FBVztJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLmNhbmNlbGJ0biB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4uYWNlcHRidG4ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY2NEY0O1xufVxuLmltZ2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjRweCAwIDEycHggMDtcbn1cblxuaW1nLmF2YXRhciB7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuc3Bhbi5wc3cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLyogQ2hhbmdlIHN0eWxlcyBmb3Igc3BhbiBhbmQgY2FuY2VsIGJ1dHRvbiBvbiBleHRyYSBzbWFsbCBzY3JlZW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDBweCkge1xuICAgIHNwYW4ucHN3IHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLmNhbmNlbGJ0biB7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _clases_roles_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../clases/roles.enum */ "./src/app/clases/roles.enum.ts");







//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
let RegistroComponent = class RegistroComponent {
    constructor(authService, route, router, formBuilder, toastService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.rolesEnum = _clases_roles_enum__WEBPACK_IMPORTED_MODULE_6__["Roles"];
        this.validation_messages = {
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
        this.form = this.formBuilder.group({
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    OnSubmitRegister() {
        this.authService.registeruser(this.email, this.password).then(authService => {
            this.router.navigate(['/Principal']);
        }).catch(err => alert('los datos son incorrectos'));
        //console.log('Estas en la funcion');
    }
};
RegistroComponent.ctorParameters = () => [
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/registro/registro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registro.component.css */ "./src/app/componentes/registro/registro.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], RegistroComponent);



/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 60%;\r\n}\r\n\r\n.tablero{\r\n    padding: .5em 1em;\r\n    justify-content: center;\r\n}\r\n\r\ntable{\r\n    background-color:black;\r\n}\r\n\r\ntd {\r\n    text-align: center;\r\n    height: 150px;\r\n    width: 150px;\r\n}\r\n\r\n#center-row{\r\n    border-top: 5px solid rgb(136, 161, 243);\r\n    border-bottom: 5px solid rgb(136, 161, 243);\r\n    border-right: 5px solid rgb(136, 161, 243);\r\n    border-left: 5px solid rgb(136, 161, 243);\r\n}\r\n\r\n.borde-right{\r\n    border-right: 5px solid rgb(136, 161, 243);\r\n    border-left: 5px solid rgb(136, 161, 243);\r\n    border-bottom: 5px solid rgb(136, 161, 243);\r\n    border-top: 5px solid rgb(136, 161, 243);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdGF0ZXRpL3RhdGV0aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QywyQ0FBMkM7SUFDM0MsMENBQTBDO0lBQzFDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyx5Q0FBeUM7SUFDekMsMkNBQTJDO0lBQzNDLHdDQUF3QztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3RhdGV0aS90YXRldGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi50YWJsZXJve1xyXG4gICAgcGFkZGluZzogLjVlbSAxZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4jY2VudGVyLXJvd3tcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2IoMTM2LCAxNjEsIDI0Myk7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiKDEzNiwgMTYxLCAyNDMpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgcmdiKDEzNiwgMTYxLCAyNDMpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2IoMTM2LCAxNjEsIDI0Myk7XHJcbn1cclxuXHJcbi5ib3JkZS1yaWdodHtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYigxMzYsIDE2MSwgMjQzKTtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiKDEzNiwgMTYxLCAyNDMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYigxMzYsIDE2MSwgMjQzKTtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2IoMTM2LCAxNjEsIDI0Myk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.ts ***!
  \********************************************************/
/*! exports provided: TatetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiComponent", function() { return TatetiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_tateti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-tateti */ "./src/app/clases/juego-tateti.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/database.service */ "./src/app/servicios/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/auth.service */ "./src/app/servicios/auth.service.ts");







let TatetiComponent = class TatetiComponent {
    constructor(toastr, authService, router, databaseService) {
        this.toastr = toastr;
        this.authService = authService;
        this.router = router;
        this.databaseService = databaseService;
        this.enJuego = false;
        this.turnoJugador = false;
        this.cuentaMarcas = 0;
        this.imgCruz = './././assets/imagenes/cruz.png';
        this.imgCirculo = './././assets/imagenes/circulo.png';
        this.nuevoJuego = new _clases_juego_tateti__WEBPACK_IMPORTED_MODULE_2__["JuegoTateti"](databaseService);
    }
    generarJugada() {
        let row = Math.floor(Math.random() * 3);
        let col = Math.floor(Math.random() * 3);
        this.marcarJugada(row, col, true);
    }
    marcarJugada(row, column, jugadaGenerada) {
        if (jugadaGenerada) {
            if (this.nuevoJuego.tablero[row][column] != "" && this.cuentaMarcas < 9) {
                this.generarJugada();
            }
            else {
                this.cuentaMarcas++;
                this.nuevoJuego.tablero[row][column] = this.imgCruz;
                this.turnoJugador = true;
                if (this.nuevoJuego.verificarTresEnLinea(this.imgCruz)) {
                    if (!this.nuevoJuego.verificar()) {
                        this.toastr.error("Perdiste..", "Te derrotaron");
                    }
                }
            }
        }
        else {
            if (this.nuevoJuego.tablero[row][column] == "") {
                this.cuentaMarcas++;
                this.nuevoJuego.tablero[row][column] = this.imgCirculo;
                this.turnoJugador = false;
                if (!this.nuevoJuego.verificarTresEnLinea(this.imgCirculo)) {
                    setTimeout(() => {
                        this.generarJugada();
                    }, 400);
                }
                else {
                    this.toastr.success("Felicitaciones!", "Ganaste");
                }
            }
        }
    }
    nuevo() {
        this.nuevoJuego.juegoTerminado = false;
        this.nuevoJuego.reset();
        this.enJuego = true;
        this.turnoJugador = true;
        this.cuentaMarcas = 0;
    }
    ngOnInit() {
    }
};
TatetiComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
TatetiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tateti',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tateti.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/tateti/tateti.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tateti.component.css */ "./src/app/componentes/tateti/tateti.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
], TatetiComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthGuard = class AuthGuard {
    constructor(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(auth => {
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(auth)) {
                this.router.navigate(['/Login']);
                return false;
            }
            else {
                return true;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/nologin.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/nologin.guard.ts ***!
  \*****************************************/
/*! exports provided: NologinGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NologinGuard", function() { return NologinGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let NologinGuard = class NologinGuard {
    constructor(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(auth => {
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(auth)) {
                return true;
            }
            else {
                this.router.navigate(['/Principal']);
                return false;
            }
        }));
    }
};
NologinGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
NologinGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], NologinGuard);



/***/ }),

/***/ "./src/app/pipes/sexo.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sexo.pipe.ts ***!
  \************************************/
/*! exports provided: SexoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPipe", function() { return SexoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SexoPipe = class SexoPipe {
    transform(value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    }
};
SexoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sexo'
    })
], SexoPipe);



/***/ }),

/***/ "./src/app/servicios/archivos-jugadores.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicios/archivos-jugadores.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchivosJugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosJugadoresService", function() { return ArchivosJugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



let ArchivosJugadoresService = class ArchivosJugadoresService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    traerJugadores(ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(data => {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, err => {
            console.log(err);
        });
    }
};
ArchivosJugadoresService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }
];
ArchivosJugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
], ArchivosJugadoresService);



/***/ }),

/***/ "./src/app/servicios/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



//import 'rxjs/add/operator/map';
let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    registeruser(email, pass) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    login(email, pass) {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(userData => resolve(userData), err => reject(err));
        });
    }
    logout() {
        return this.afAuth.auth.signOut();
    }
    //Obtiene los datos del usuario en caso de que esté logueado. 
    getAuth() {
        return this.afAuth.authState.pipe(auth => auth);
    }
    updateProfile(newName, photoURL) {
        return this.afAuth.auth.currentUser.updateProfile({
            displayName: newName,
            photoURL: photoURL
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
], AuthService);



/***/ }),

/***/ "./src/app/servicios/database.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/database.service.ts ***!
  \***********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _clases_resultado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clases/resultado */ "./src/app/clases/resultado.ts");




let DatabaseService = class DatabaseService {
    constructor(afDatabase) {
        this.afDatabase = afDatabase;
    }
    //constructor(private afireDatabase : AngularFirestore) { }
    GuardarResultados(name, puntaje, minutosTranscurridos, segundosTranscurridos, juego) {
        console.log("Guardando resultado: " + name + " " + puntaje + " " + minutosTranscurridos + " : " + segundosTranscurridos + " " + juego);
        /*   this.afDatabase.database.ref('resultados/').push({
            nombre: name,
            puntaje: puntaje,
            minutos: minutosTranscurridos,
            segundos: segundosTranscurridos,
            juego: juego,
            fecha: new Date().toDateString()
          }) */
    }
    ListarResultados() {
        var listaResultados = [];
        var x = this.afDatabase.list('resultados');
        /* x.snapshotChanges().subscribe(item=>{
        item.forEach(element=>{
        var y=element.payload.toJSON();
        y['$key']=element.key;
        this.listaResultados.push(y as Resultado);
          });
        });  */
        /*   this.items = this.afireDatabase.collection('resultados').valueChanges();*/
        /*  this.afDatabase.database.ref('resultados').once('value', (data) => {
            data.forEach((child) => {*/
        let fecha = "10/10/2019";
        let juego = "Anagrama";
        let minutosTranscurridos = 2;
        let nombre = "admin";
        let puntaje = 100;
        let segundosTranscurridos = 2;
        let resultado = new _clases_resultado__WEBPACK_IMPORTED_MODULE_3__["Resultado"](new Date(fecha), juego, minutosTranscurridos, segundosTranscurridos, puntaje, nombre);
        listaResultados.push(resultado);
        let fecha2 = "10/10/2019";
        let juego2 = "Memoria";
        let minutosTranscurridos2 = 2;
        let nombre2 = "admin";
        let puntaje2 = 200;
        let segundosTranscurridos2 = 2;
        let resultado2 = new _clases_resultado__WEBPACK_IMPORTED_MODULE_3__["Resultado"](new Date(fecha2), juego2, minutosTranscurridos2, segundosTranscurridos2, puntaje2, nombre2);
        listaResultados.push(resultado2);
        let fecha3 = "10/10/2019";
        let juego3 = "Tateti";
        let minutosTranscurridos3 = 2;
        let nombre3 = "admin";
        let puntaje3 = 100;
        let segundosTranscurridos3 = 2;
        let resultado3 = new _clases_resultado__WEBPACK_IMPORTED_MODULE_3__["Resultado"](new Date(fecha3), juego3, minutosTranscurridos3, segundosTranscurridos3, puntaje3, nombre3);
        listaResultados.push(resultado3);
        return listaResultados;
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
], DatabaseService);



/***/ }),

/***/ "./src/app/servicios/juego-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/juego-service.service.ts ***!
  \****************************************************/
/*! exports provided: JuegoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoServiceService", function() { return JuegoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



let JuegoServiceService = class JuegoServiceService {
    constructor(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    listar() {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
        })
            .catch(err => {
            console.log(err);
        });
        this.peticion
            .subscribe(data => {
            console.log("En listar");
            console.log(data);
        }, err => {
            console.info("error: ", err);
        });
        let miArray = new Array();
        //miArray.push(new JuegoAdivina("Juego 1", false));
        //miArray.push(new JuegoAdivina("Pepe", true));
        //miArray.push(new JuegoAdivina("Juego 3", false));
        //miArray.push(new JuegoAdivina("Juego 4", false));
        //miArray.push(new JuegoAdivina("Juego 5", false));
        //miArray.push(new JuegoAdivina("Juego 6", false));
        return miArray;
    }
    listarPromesa() {
        this.peticion
            .subscribe(data => {
            console.log("En listarPromesa");
            console.log(data);
        }, err => {
            console.log(err);
        });
        let promesa = new Promise((resolve, reject) => {
            let miArray = new Array();
            //miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
            //miArray.push(new JuegoAdivina("PepePromesa", true));
            //miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
            //miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
            //miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
            //miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    }
};
JuegoServiceService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }
];
JuegoServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
], JuegoServiceService);



/***/ }),

/***/ "./src/app/servicios/jugadores.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/jugadores.service.ts ***!
  \************************************************/
/*! exports provided: JugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresService", function() { return JugadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_jugador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clases/jugador */ "./src/app/clases/jugador.ts");



let JugadoresService = class JugadoresService {
    //peticion:any;
    // constructor( public miHttp: ArchivosJugadoresService ) {
    constructor() {
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    traertodos(ruta, filtro) {
        var listaJugadores = [];
        /* return this.miHttp.traerJugadores(ruta).then(data=>{
          console.info("jugadores service",data);
    
          this.filtrado=data;
    
         let  ganador: boolean;
          if(filtro=="ganadores")
          {
            ganador= true;
          }
          else
          {
            ganador= false;
          }
    
          this.filtrado =this.filtrado.filter(
            data => data.gano === ganador  || filtro=="todos" ); return this.filtrado}
          )
          .catch(errror=>{console.log("error") */
        /*   return this.filtrado;
            
      
          }); */
        let usuario = "admin";
        let gano = true;
        let juego = "Memoria";
        let puntaje = 100;
        let resultado = new _clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"](usuario, gano, juego, puntaje);
        listaJugadores.push(resultado);
        let usuario2 = "admin";
        let gano2 = true;
        let juego2 = "Memoria";
        let puntaje2 = 100;
        let resultado2 = new _clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"](usuario2, gano2, juego2, puntaje2);
        listaJugadores.push(resultado2);
        let usuario3 = "admin";
        let gano3 = true;
        let juego3 = "Memoria";
        let puntaje3 = 100;
        let resultado3 = new _clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"](usuario3, gano3, juego3, puntaje3);
        listaJugadores.push(resultado3);
        let usuario4 = "admin";
        let gano4 = true;
        let juego4 = "Memoria";
        let puntaje4 = 100;
        let resultado4 = new _clases_jugador__WEBPACK_IMPORTED_MODULE_2__["Jugador"](usuario4, gano4, juego4, puntaje4);
        listaJugadores.push(resultado4);
        this.filtrado = listaJugadores;
        return this.filtrado;
    }
};
JugadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], JugadoresService);



/***/ }),

/***/ "./src/app/servicios/mi-http/mi-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/mi-http/mi-http.service.ts ***!
  \******************************************************/
/*! exports provided: MiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiHttpService", function() { return MiHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);







let MiHttpService = class MiHttpService {
    constructor(http) {
        this.http = http;
    }
    httpGetP(url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    httpPostP(url, objeto) {
        return this.http
            .get(url)
            .subscribe(data => {
            console.log(data);
            return data;
        });
    }
    httpGetO(url) {
        return this.http.get(url)
            .map((res) => res.json())
            .catch((err) => rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.json().error || 'Server error'));
    }
    extractData(res) {
        return res.json() || {};
    }
    handleError(error) {
        return error;
    }
};
MiHttpService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
MiHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], MiHttpService);



/***/ }),

/***/ "./src/app/servicios/paises.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/paises.service.ts ***!
  \*********************************************/
/*! exports provided: PaisesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesService", function() { return PaisesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");



let PaisesService = class PaisesService {
    constructor(miHttp) {
        this.miHttp = miHttp;
    }
    listar() {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(data => {
            console.log(data);
            return data;
        })
            .catch(err => {
            console.log(err);
            return null;
        });
        //return null;
    }
};
PaisesService.ctorParameters = () => [
    { type: _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"] }
];
PaisesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
], PaisesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
const settings = { timestampsInSnapshots: true };
const firebaseConfig = {
    apiKey: "AIzaSyD53gsjl3hHccj-o1a5x_4rQlllWXUnprA",
    authDomain: "chatonline-dd2e3.firebaseapp.com",
    databaseURL: "https://chatonline-dd2e3.firebaseio.com",
    projectId: "chatonline-dd2e3",
    storageBucket: "chatonline-dd2e3.appspot.com",
    messagingSenderId: "1080174758967",
    appId: "1:1080174758967:web:3a91679974c7ec99"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ariel/Laboratorio 4/TP-Sala-de-Juegos-ANGULAR--master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map