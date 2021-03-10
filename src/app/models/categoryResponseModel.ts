import { Category } from "./category";
import { ResponseModel } from "./reponseModel";

export interface CategoryResponseModel extends ResponseModel{
    data:Category[]
}