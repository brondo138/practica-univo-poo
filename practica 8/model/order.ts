import { Customer } from "./customer";
import { Product } from "./product";

export class Order{
    constructor(public id: number, public customer: Customer, public product: Product[], public total: number){}


}