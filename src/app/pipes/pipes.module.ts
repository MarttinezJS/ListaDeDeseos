import { NgModule } from '@angular/core';
import { FiltrolistasPipe } from './filtrolistas.pipe';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    FiltrolistasPipe,
  ],
  exports: [
    FiltrolistasPipe
  ]
})
export class PipesModule { }
