import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../@core/backend/common/services/product.service'
import { Product } from '../../@core/interfaces/common/product'

@Component({
  selector: 'ngx-walkaway',
  templateUrl: './walkaway.component.html',
  styleUrls: ['./walkaway.component.scss']
})
export class WalkawayComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(x=>{
      for(let p of x){
        if(p.productName.toLowerCase().indexOf('walkaway') > -1){
          this.product = p;
          break;
        }
      }
    });
  }

}
