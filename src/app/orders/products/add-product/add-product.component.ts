import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  /*
  url:"http://localhost:4200/assets/t6.jpg";
  onselectFile(e){
    if(e.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
*/
  addNewProduct(form){
    console.log(form.value);

    let newProduct = {
      id: form.value.id,
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      descriptions: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: form.value.product_img,
      isAvailable: 1,
      color: form.value.product_color,
      review: form.value.product_review,
    };
    console.log(newProduct);
    this.productService.createProduct(newProduct).subscribe(data=>{
      console.log(data);
    });
  }
}