import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  productID = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productID = data.id;
    })
  }

}
