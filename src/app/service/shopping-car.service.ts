import { Injectable } from '@angular/core';
import { BuyItem,ShoppingCar,Product } from 'app/model/shopping';

@Injectable()
export class ShoppingCarService {
  myShoppingCar:ShoppingCar = new ShoppingCar() ;
  constructor() {
    this.myShoppingCar.items = [];
   }

  AddToShoppingCar(item:BuyItem){
    let flag = true;
    this.myShoppingCar.items.forEach(function(el){
      if(el.key == item.key)
      {
        flag = false;
        el.amount = el.amount + item.amount;
      }
    });
    if(flag)
    {
      this.myShoppingCar.items.push(item);
    }
    this.CalAmount();
  }
  RemoveShoppingCarItem(pkey:string){
    this.myShoppingCar.items = this.myShoppingCar.items.filter(
      function(el){
        return el.key != pkey;
    });
    this.CalAmount();
  }
  MinusShoppingCarItem(pkey:string){
    let needRemove = false;
    this.myShoppingCar.items.forEach(
      function(el){
        if(el.key == pkey){
          el.amount = el.amount - 1;
          if(el.amount <= 0)
          {
            needRemove = true;
          }
        }
    });
    if(needRemove)
    {
      this.RemoveShoppingCarItem(pkey);
    }
    else
    {
      this.CalAmount();
    }
    
  }
  AddShoppingCarItemAmount(item:BuyItem,amount:number){
    this.myShoppingCar.items.forEach(function(el){
      if(el.key == item.key)
      {
        el.amount = el.amount+amount;
      }
    });
    this.CalAmount();
  }
  CalAmount(){
    let total = 0;
    this.myShoppingCar.items.forEach(function(el){
      el.total = el.amount * el.price;
      total = total + el.total;
    });
    this.myShoppingCar.total = total;
  }
}
