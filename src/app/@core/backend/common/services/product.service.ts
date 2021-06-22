import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../api/http.service';
import { Product } from '../../../interfaces/common/product';

@Injectable()
export class ProductService {
  private readonly apiController: string = 'products';

  constructor(private api: HttpService) {}

  getAll(): Observable<Array<Product>> {
    return this.api.get(`${this.apiController}/`);
  }

}