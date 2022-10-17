import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor() { }

  obtenerDatos(){
    console.log("A que está muy bonito mi porfolio :)");
  }
}
