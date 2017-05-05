import { ShoppingCarService } from 'app/service/shopping-car.service';
import { ShoppingCar, BuyItem } from 'app/model/shopping';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent implements OnInit {
  shoppingCar:ShoppingCar;
  constructor(private sCar : ShoppingCarService) { }

  ngOnInit() {
    this.shoppingCar = this.sCar.myShoppingCar;
  }

  onAddClick(item:BuyItem){
    this.sCar.AddShoppingCarItemAmount(item,1);
  }

  onMinusClick(item:BuyItem){
    this.sCar.MinusShoppingCarItem(item.key);
  }
  onDelClick(item:BuyItem){
    this.sCar.RemoveShoppingCarItem(item.key);
  }
}
