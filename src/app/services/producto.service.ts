import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getProductos(){
    return [
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
  }
}
