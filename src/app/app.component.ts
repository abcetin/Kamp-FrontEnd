import { Component } from '@angular/core';


//component html datasını kontrol ettiğimiz yer
// "./" - aynı klasör demek

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "northwind";
  user: string = "Abdullah ÇETİN";
  
}
