const username: string | number = 'nico';

const sum = (a: number, b: number) => {
  return a + b;
}
sum(1, 3);

class Person {
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}


class Person2 {

  constructor(public age: number, public lastName: string) {
  }
}

const nico = new Person(33, 'nico');

