import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Base_URL: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.Base_URL}/product`)
  }
  getProduct(id : string):Observable<Product>{
    return this.http.get<Product>(`${this.Base_URL}/product/${id}`)
  }
  createProduct(product : Product):Observable<Product>{
    return this.http.post<Product>(`${this.Base_URL}/product/create`, product)
  }
  deleteProduct(id: string):Observable<Product>{
    return this.http.delete<Product>(`${this.Base_URL}/product/delete/`+id)
  }
  updateProduct(id: string, product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.Base_URL}/product/update/${id}`, product)
  }

}
