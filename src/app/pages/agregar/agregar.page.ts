import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItems } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {

  lista: Lista ;
  nombreItem = '';
  constructor(private deseoService: DeseosService,
              private route: ActivatedRoute) {
    const listaid = route.snapshot.paramMap.get('listaid');
    this.lista = deseoService.obtenerLista(listaid);
  }

  agregarItem() {
    const item = new ListaItems( this.nombreItem );
    this.lista.items.push(  item );
    this.nombreItem = '';
    this.deseoService.guardarStorage();
  }

  eliminar(i: number) {
    this.lista.items.splice( i, 1 );
    this.deseoService.guardarStorage();
  }

  checkCambio( item: ListaItems ) {
    const pendientes = this.lista.items.filter( items => !item.completa).length;
    if ( pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseoService.guardarStorage();
  }

}
