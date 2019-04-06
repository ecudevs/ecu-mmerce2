import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ProductoFormComponent } from '../producto-form/producto-form.component';
import { ProductoListComponent } from '../producto-list/producto-list.component';
import { HttpModule } from '@angular/http';
import { NumeroDirective } from '../_directives/numero.directive';
import { DecimalesPipe } from '../_pipes/decimales.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  // TODO: explicar, entryComponent para usar componentes por ejemplo en modales
  entryComponents: [ProductoFormComponent],
  declarations: [Tab1Page, ProductoFormComponent, ProductoListComponent, NumeroDirective, DecimalesPipe]
})
export class Tab1PageModule {}
