import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  item = {
    name : 'Kelengkeng',
    harga : 1000
  };

  listItem = [{
    name : 'Jeruk',
    harga : 10000
  }, {
    name : 'Apel',
    harga : 12000
  }];
  
  arrAngka = [1,2,3,4];
  show = true;
}
