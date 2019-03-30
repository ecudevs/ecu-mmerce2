import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss'],
})
export class ProductoFormComponent implements OnInit {

  @Output() guardar = new EventEmitter<any>();

  @Input() datosFormulario: any = {
    descripcion: 'Encebollado'
  };

  opciones = [
    { valor: 'B', texto: 'Bebidas' },
    { valor: 'A', texto: 'Alimento' },
    { valor: 'T', texto: 'Tecnologia' }
  ]
  
  constructor() { }

  ngOnInit() {}

  guardarProducto(){
    
    this.guardar.next(this.datosFormulario);
    this.datosFormulario={};
  }

}
