import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ModalController, AlertController } from '@ionic/angular';
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
    public modalController: ModalController,
    public alertController: AlertController) {

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
    if (!producto._id) {
      this.productoService.insertar(producto).subscribe(response=>{
        if(response.success){

          this.getProductos();
        } else {
          this.presentAlert(response.error.message)
        }
      }, error=>{
        console.log(error);
      });
      return;
    }

    this.productoService.modificar(producto).subscribe(response => {
      this.getProductos();
    }, error => {
      console.log(error);
    });

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

  async presentAlert(mensaje) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
