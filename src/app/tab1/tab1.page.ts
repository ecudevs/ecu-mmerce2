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

  constructor(private productoService:ProductoService,
    public modalController: ModalController){

  }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(){
    this.productos = this.productoService.getProductos()
  }

  agregarProducto(producto) {
    
    this.productos.push(producto);
    // this.datosFormulario = {};
  }

  editar(producto){
    this.datosFormulario=producto;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ProductoFormComponent,
      componentProps: { value: 123 }
    });
    
    await modal.present();
    
    modal.onDidDismiss().then(data=>{
      this.agregarProducto(data.data.producto);
    }).catch(error=>console.log(error));
  }
}
