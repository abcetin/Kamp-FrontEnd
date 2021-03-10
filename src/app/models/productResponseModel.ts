import { Product } from "./product";
import { ResponseModel } from "./reponseModel";

export interface ProductResponseModel extends ResponseModel{
    data:Product[]
}