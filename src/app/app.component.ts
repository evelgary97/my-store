import { Component, Output } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onLoaded() {
    console.log('log padre');
  }

  imgParent = '';

}
