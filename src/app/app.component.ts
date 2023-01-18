import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nicolas';
  age = 50;
  btnDisabled = true;

  person = {
    name: "Nico",
    age: 20
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  agePlus() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

}
