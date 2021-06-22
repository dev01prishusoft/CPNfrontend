import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../@core/backend/common/services/product.service'
import { Product } from '../../@core/interfaces/common/product'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'ngx-vendor-home-page',
  templateUrl: './vendor-home-page.component.html',
  styleUrls: ['./vendor-home-page.component.scss']
})
export class VendorHomePageComponent implements OnInit {

  public products: Array<Product>;

  constructor(private productService: ProductService,private domSanitizationService: DomSanitizer) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(x=>{
      this.products = x;
      var len = this.products.length;
      for(let p of this.products){
        if(p.productMedia){
          p.productMedia[0].safePath = this.domSanitizationService.bypassSecurityTrustResourceUrl(p.productMedia[0].path);
        }
      }
    });
  }

}
