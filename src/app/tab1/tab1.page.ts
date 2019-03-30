import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datosFormulario:any = {
    descripcion: 'Encebollado'
  };

  opciones = [
    { valor: 'B', texto: 'Bebidas' },

    { valor: 'A', texto: 'Alimento' },

    { valor: 'T', texto: 'Tecnologia' }
  ]

  cervezas:any = [
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

  agregarProducto() {
    this.cervezas.push(this.datosFormulario);
    this.datosFormulario = {};
  }
}
