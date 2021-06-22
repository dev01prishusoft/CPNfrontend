import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../@core/backend/common/services/product.service'
import { Product } from '../../@core/interfaces/common/product'

@Component({
  selector: 'ngx-maintenance-free',
  templateUrl: './maintenance-free.component.html',
  styleUrls: ['./maintenance-free.component.scss']
})
export class MaintenanceFreeComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(x=>{
      for(let p of x){
        if(p.productName.toLowerCase().indexOf('maintenance') > -1){
          this.product = p;
          break;
        }
      }
    });
  }

}
