import EmberRouter from '@ember/routing/router';
import config from 'rock-and-roll-with-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('authors', function () {
    this.route('author', { path: ':slug' }, function () {
      this.route('stories');
    });
  });
});
