import { Category } from './../../../site-layout/category';
import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product'; 

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  
  searchCategory:Category;
  productList:Product;

  constructor(private activatedRoute: ActivatedRoute,
    private productservice: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>{
      this.searchCategory = data.id;

      this.productservice.searchCategoryProduct(this.searchCategory).subscribe(categoryData=>{
        this.productList = categoryData;
      })
    })
    
  }

}
