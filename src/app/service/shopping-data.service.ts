import { Injectable } from '@angular/core';
import { Category,Product } from '../model/shopping';

@Injectable()
export class ShoppingDataService {

  constructor() { }

  getCategoryList():Array<Category>{
    let result : Array<Category> = [];

    let tmp1:Category = {sort:0,key:'c1',values:'筆電'};
    let tmp2:Category = {sort:1,key:'d1',values:'桌上電腦'};
    let tmp3:Category = {sort:2,key:'c3',values:'螢幕'};
    let tmp4:Category = {sort:3,key:'a1',values:'主機板'};
    let tmp5:Category = {sort:4,key:'c2',values:'印表機'};
    let tmp6:Category = {sort:5,key:'e5',values:'鍵盤'};

    result.push(tmp1,tmp2,tmp3,tmp4,tmp5,tmp6);

    return result;
  }
  getProductList():Array<Product>{
    let result : Array<Product> = [];

    let p1:Product ={ckey:'c1',sort:0,key:'p001',value:'DELL Inspiron 15 5000',price:20900,desc:'最新七代i5-2G獨顯筆電',imgs:['http://a.ecimg.tw/items/DHAI3BA9007H1V1/000001_1493861300.jpg']};
    let p2:Product ={ckey:'c1',sort:1,key:'p002',value:'HP ENVY 13-ab061TU',price:54900,desc:'HP ENVY 13-ab061TU 時尚金',imgs:['http://a.ecimg.tw/items/DHAG5FA9007Y6FE/000001_1493688951.jpg']};
    let p5:Product ={ckey:'c1',sort:1,key:'p003',value:'HP ENVY 13-ab061TU',price:54900,desc:'HP ENVY 13-ab061TU 時尚金',imgs:['http://a.ecimg.tw/items/DHAG5FA9007Y6FE/000001_1493688951.jpg']};
    let p6:Product ={ckey:'c1',sort:1,key:'p004',value:'HP ENVY 13-ab061TU',price:54900,desc:'HP ENVY 13-ab061TU 時尚金',imgs:['http://a.ecimg.tw/items/DHAG5FA9007Y6FE/000001_1493688951.jpg']};

    let p3:Product ={ckey:'d1',sort:0,key:'d001',value:'ASUS BP1AD',price:13900,desc:'華碩 BP1AD「無限出擊」i3雙核Win10Pro商用電腦',imgs:['http://a.ecimg.tw/items/DSAM2GA9007Y5QT/000001_1493803365.jpg']};
    let p4:Product ={ckey:'d1',sort:1,key:'d002',value:'HP 280 G2 SFF',price:16990,desc:'HP 280 G2 SFF 6代i3雙核Win10 Pro商用電腦 ★精選商用超值推薦★',imgs:['http://a.ecimg.tw/items/DSAM2LA9007SS3R/000001_1493776575.jpg']};

    result.push(p1,p2,p3,p4,p5,p6);

    return result;
  }
  getProductListByCategoryID(ckey:string):Array<Product>{
    let result : Array<Product>;
    let source : Array<Product> = this.getProductList();
    result = source.filter(function(el){
      return el.ckey === ckey;
    });
    return result;
  }
  getProductByID(key:string):Product{
    let source : Array<Product> = this.getProductList();
    let result : Product = source.filter(function(el){
      return el.key === key;
    })[0];
    return result;
  }
}
