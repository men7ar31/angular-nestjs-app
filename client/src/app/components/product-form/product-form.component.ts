import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from "../../services/product.service";
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: '',
  };
   edit: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activedRoute: ActivatedRoute
    ) {}


  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params){
      this.productService.getProduct(params['id'])
      .subscribe(
        res =>{
          this.product = res;
          this.edit = true
        }
      )
    }
  }
  submitProduct(){
   this.productService.createProduct(this.product)
    .subscribe(
      res=>{
        console.log(res);
       this.router.navigate(['/']);
      }
    )
  }
  updateProduct(){
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id!, this.product)
    .subscribe(
      res =>{
        this.router.navigate(['/'])
      }
    )
  }
}
