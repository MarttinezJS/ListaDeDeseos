import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  agregarLista( titulo: string ) {
    const listaNueva = new Lista(titulo);
    this.listas.push(listaNueva);
    this.guardarStorage();
    return listaNueva.id;
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find( data => data.id === id);
  }

  borrarLista( lista: Lista ) {
    this.listas = this.listas.filter( data => data.id !== lista.id);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse( localStorage.getItem('data') );
    }
  }
}
