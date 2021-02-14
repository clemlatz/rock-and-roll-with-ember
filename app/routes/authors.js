import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class Author {
  @tracked firstName;
  @tracked lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default class AuthorsRoute extends Route {
  model() {
    return [
      new Author('Robert Charles', ' Wilson'),
      new Author('Greg', 'Egan'),
      new Author('Ted', 'Chiang'),
    ];
  }
}
