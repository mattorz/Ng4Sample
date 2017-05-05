export class Shopping {
}

export class Category{
    sort:number;
    key:string;
    values:string;
}
export class Product{
    ckey:string;
    sort:number;
    key:string;
    value:string;
    price:number;
    desc:string;
    imgs:Array<string>;
}
export class BuyItem extends Product
{
    amount:number;
    total:number;
}
export class ShoppingCar{
    items:Array<BuyItem>;
    total:number;
}