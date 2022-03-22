import EmberRouter from '@ember/routing/router';
import config from 'qanda/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('questions');
  this.route('question', { path: '/question/:id' });
  this.route('not-found', { path: '*path' });
});
