import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../site-layout/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  //Get All Product
  getAllProduct():Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.get<Product>(baseUrl)
  }
  //Create Product
  createProduct(productBody):Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product>(baseUrl, productBody);
  }
  //View Product
  viewProduct(categoryId):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+categoryId;
    return this.httpClient.get<Product>(baseUrl)
  }
  //Update Product
  updateProduct(productId, productBody):Observable<Product>{
    const baseUrl="http://locolhost:3000/product#"+productId;
    return this.httpClient.put<Product>(baseUrl, productBody)
  }
  //Delete Product
  deleteProduct(productId):Observable<Product>{
    const baseUrl="http://locolhost:3000/product/"+productId;
    return this.httpClient.delete<Product>(productId)
  }
  //Search Category Product
  searchCategoryProduct(categoryId):Observable<Product>{
    const baseUrl="http://localhost:3000/product?category"+categoryId;
    return this.httpClient.get<Product>(baseUrl)
  }
  //Search Date Product
  searchDateProduct(dateParam):Observable<Product>{
    const baseUrl="http://locolhost:3000/date="+dateParam;
    return this.httpClient.get<Product>(baseUrl)
  }
  //Get Category
  getCategory(){
    const categoryUrl="http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoryUrl)
  }
}