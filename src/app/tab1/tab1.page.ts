import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datosFormulario = { descripcion: 'Hello' }

  productos: any = [
    {
      descripcion: 'Cervezas',
      precio: 2,
      stock: 5,
      categoria: 'BEBIDAS'
    },
    {
      descripcion: 'Cervezas 1',
      urlImage: 'https://http2.mlstatic.com/cerveza-corona-D_NQ_NP_979411-MLC20550406761_012016-F.jpg',
      precio: 2,
      stock: 5,
      categoria: 'BEBIDAS'
    },
    {
      descripcion: 'Cervezas 2',
      urlImage: 'https://http2.mlstatic.com/cerveza-corona-D_NQ_NP_979411-MLC20550406761_012016-F.jpg',
      precio: 2,
      stock: 5,
      categoria: 'BEBIDAS'
    },
    {
      descripcion: 'Cervezas 2',
      urlImage: 'https://http2.mlstatic.com/cerveza-corona-D_NQ_NP_979411-MLC20550406761_012016-F.jpg',
      precio: 2,
      stock: 5,
      categoria: 'BEBIDAS'
    }
  ]

  agregarProducto(producto) {
    
    this.productos.push(producto);
    // this.datosFormulario = {};
  }

  editar(producto){
    debugger;
    this.datosFormulario=producto;
  }
}
