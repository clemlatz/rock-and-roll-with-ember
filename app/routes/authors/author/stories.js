import Route from '@ember/routing/route';

export default class StoriesRoute extends Route {
  model() {
    const author = this.modelFor('authors.author');
    return author.stories;
  }
}
