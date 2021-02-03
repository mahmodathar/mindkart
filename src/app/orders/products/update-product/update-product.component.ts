import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;

  productDetails: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe(productData=>{
        this.productDetails = productData; //get the existing data of the product
        console.log(this.productDetails);
    });
    });
  }

  updateProduct(form){
    const updateProduct = {
      id: form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      descriptions: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      review: form.value.product_category,

      /*id: form.value.id,
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      review: form.value.product_review,*/
    };
    console.log(form);
    this.productService.updateProduct(this.productId, updateProduct).subscribe(data=>{
      console.log(data)
    });
  }
}
