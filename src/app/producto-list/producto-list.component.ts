import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss'],
})
export class ProductoListComponent implements OnInit {

  @Input() productos: any = [];
  @Output() _editar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  editar(producto) {
    this._editar.next(producto)
  }

}
