import { ShoppingCarService } from './../../service/shopping-car.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, BuyItem } from 'app/model/shopping';
import { ShoppingDataService  } from 'app/service/shopping-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
   providers:[]
})
export class ItemComponent implements OnInit {
  key:string;
  product:Product;
  constructor(private sCar:ShoppingCarService, private route : ActivatedRoute , private sService : ShoppingDataService) { }

  ngOnInit() {
    this.key = this.route.snapshot.params['id'];
    this.route.params.subscribe((params:Params)=>{
      this.key = params['id'];
      this.getProduct(this.key);
    });
  }
  getProduct(key:string){
    this.product= this.sService.getProductByID(key);
  }
  addToShoppingCarClick(SelectedAmount:string)
  {
    let bitem = new BuyItem();
    bitem.value = this.product.value;
    bitem.ckey = this.product.ckey;
    bitem.amount = parseInt(SelectedAmount);
    bitem.desc = this.product.desc;
    bitem.imgs = this.product.imgs;
    bitem.key = this.product.key;
    bitem.price = this.product.price;
    bitem.sort = this.product.sort;
    this.sCar.AddToShoppingCar(bitem);
  }
}
