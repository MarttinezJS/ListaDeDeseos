import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public deseoservice: DeseosService,
              private router: Router,
              private alert: AlertController) {
  }
  async agregarLista() {
    const alert = await this.alert.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista de tareas'
        }
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'crear',
          handler: (data) => {
            if (data.titulo.trim().length === 0) {
              return;
            }
            this.router.navigateByUrl(`/tabs/tab1/agregar/${this.deseoservice.agregarLista( data.titulo )}`);
          }
        }
      ]
    });

    alert.present();
  }



}
