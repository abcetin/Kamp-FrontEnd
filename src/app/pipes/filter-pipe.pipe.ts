import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText? filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
  transform2(value: Category[], filterText: string): Category[] {
    filterText = filterText? filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:Category)=>p.categoryName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
