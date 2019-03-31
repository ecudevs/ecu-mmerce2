import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  guardarProducto(){
    
    this.guardar.next(this.datosFormulario);

    try {
      this.retornarAModal();
    } catch(e){
      console.log(e);
    }

    this.datosFormulario={};
  }

  retornarAModal(){
    this.modalController.dismiss({
      producto: this.datosFormulario
    })
  }

}
