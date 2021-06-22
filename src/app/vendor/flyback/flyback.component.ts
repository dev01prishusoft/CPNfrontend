import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../@core/backend/common/services/product.service'
import { Product } from '../../@core/interfaces/common/product'

@Component({
  selector: 'ngx-flyback',
  templateUrl: './flyback.component.html',
  styleUrls: ['./flyback.component.scss']
})
export class FlybackComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(x=>{
      for(let p of x){
        if(p.productName.toLowerCase().indexOf('flyback') > -1){
          this.product = p;
          break;
        }
      }
    });
  }

}
