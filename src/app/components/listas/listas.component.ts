import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {

  @Input() pendiente = true;
  @ViewChild( IonList, null) iLista: IonList;

  constructor(private router: Router, public deseoservice: DeseosService, private alert: AlertController) {
  }

    borrarLista( item: Lista ) {
      this.deseoservice.borrarLista( item );
    }

    async editarTitulo( lista: Lista ) {
      const alert = await this.alert.create({
        header: 'Editar',
        inputs: [
          {
            name: 'titulo',
            type: 'text',
            value: lista.titulo
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => this.iLista.closeSlidingItems()
          },
          {
            text: 'Hecho',
            handler: (data) => {
              if (data.titulo.trim().length === 0) {
                return;
              }
              lista.titulo = data.titulo;
              this.deseoservice.guardarStorage();
              this.iLista.closeSlidingItems();
            }
          }
        ]
      });
      alert.present();
    }

  verTareas( item: Lista ) {
    if (this.pendiente) {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${item.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${item.id}`);
    }
  }
}
