import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class Author {
  @tracked firstName;
  @tracked lastName;
  @tracked stories;

  constructor({ firstName, lastName, slug, stories }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.slug = slug;
    this.stories = stories;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Story {
  constructor({ title, year, rating, author }) {
    this.title = title;
    this.year = year;
    this.rating = rating;
    this.author = author;
  }
}

export default class AuthorsRoute extends Route {
  model() {
    const stateOfTheArt = new Story({
      title: 'State of the art',
      year: 1986,
      rating: 1,
      author: 'Robert Charles Wilson',
    });
    const aKnightOfAntiquity = new Story({
      title: 'A knight of Antiquity',
      year: 1987,
      rating: 2,
      author: 'Robert Charles Wilson',
    });
    const robertCharlesWilson = new Author({
      firstName: 'Robert Charles',
      lastName: 'Wilson',
      slug: 'robert-charles-wilson',
      stories: [stateOfTheArt, aKnightOfAntiquity],
    });

    const theInfiniteAssassin = new Story({
      title: 'The Infinite Assassin',
      year: 1991,
      rating: 3,
      author: 'Greg Egan',
    });
    const axiomatic = new Story({
      title: 'Axiomatic',
      year: 1990,
      rating: 4,
      author: 'Greg Egan',
    });
    const gregEgan = new Author({
      firstName: 'Greg',
      lastName: 'Egan',
      slug: 'greg-egan',
      stories: [theInfiniteAssassin, axiomatic],
    });

    const towerOfBabylon = new Story({
      title: 'Tower of Babylon',
      year: 1990,
      rating: 5,
      author: 'Ted Chiang',
    });
    const understand = new Story({
      title: 'Understand',
      year: 1994,
      rating: 4,
      author: 'Ted Chiang',
    });
    const tedChiang = new Author({
      firstName: 'Ted',
      lastName: 'Chiang',
      slug: 'ted-chiang',
      stories: [towerOfBabylon, understand],
    });

    return [robertCharlesWilson, gregEgan, tedChiang];
  }
}
