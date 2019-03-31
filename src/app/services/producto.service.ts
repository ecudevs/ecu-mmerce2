import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: Http) { }

  getProductos() {
    return this.http.get('http://localhost:9000/productos')
    .pipe(map((response: Response) => response.json()))
  }
}
