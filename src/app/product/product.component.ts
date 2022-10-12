import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private myapi:ApiService) { this.putData()}
  putData=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.productData=data
      }
    )
  }
  productData:any=[]

  ngOnInit(): void {
  }

}
