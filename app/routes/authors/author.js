import Route from '@ember/routing/route';

export default class AuthorsAuthorRoute extends Route {
  model(params) {
    const authors = this.modelFor('authors');
    return authors.find((author) => author.slug === params.slug);
  }
}
