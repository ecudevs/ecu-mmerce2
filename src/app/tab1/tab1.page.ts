import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ModalController } from '@ionic/angular';
import { ProductoFormComponent } from '../producto-form/producto-form.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  datosFormulario = { descripcion: 'Hello' }

  productos: any = [];

  constructor(private productoService: ProductoService,
    public modalController: ModalController) {

  }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(event?) {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data.productos;

      if (event) {
        event.target.complete();
      }

    }, error => {
      if (event) {
        event.target.complete();
      }
      console.log(error);
    })
  }

  agregarProducto(producto) {
    if (!producto.id) {
      this.productos.push(producto);
      return;
    }

    let index = this.productos.findIndex(x => x.id === producto.id);
    this.productos[index] = producto;

    // this.datosFormulario = {};
  }

  editar(producto) {
    this.datosFormulario = producto;
  }

  async presentModal(producto?) {
    const modal = await this.modalController.create({
      component: ProductoFormComponent,
      componentProps: { datosFormulario: producto || {} }
    });

    await modal.present();

    modal.onDidDismiss().then(data => {
      this.agregarProducto(data.data.producto);
    }).catch(error => console.log(error));
  }
}
