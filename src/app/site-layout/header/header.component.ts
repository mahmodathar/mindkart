import { Category } from './../category';
import { ProductService } from './../../orders/products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorylist : Category;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data =>{
      this.categorylist = data;
    })
  }

}
