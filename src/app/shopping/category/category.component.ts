import { ShoppingDataService } from 'app/service/shopping-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from "app/model/shopping";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[]
})
export class CategoryComponent implements OnInit {
  cid:string;
  products:Array<Product> = [];
  constructor(private router:Router,private route : ActivatedRoute , private sService : ShoppingDataService) { }

  ngOnInit() {
    this.cid = this.route.snapshot.params['cid'];
    this.route.params.subscribe((params:Params)=>{
      this.cid = params['cid'];
      this.getCategory(this.cid);
    });
    
  }

  getCategory(cid:string){
    this.products = this.sService.getProductListByCategoryID(cid);
  }

  onproductclick(key:string){
    this.router.navigate(['/shopping/'+ this.cid,key]);
  }
}
