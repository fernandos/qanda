import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { action } from '@ember/object';

export default class QuestionRoute extends Route {
  @service store;
  @service router;

  model(params) {
    const { id } = params;

    return hash({
      id,
      answers: this.store.findAll('answer')
    });
  }

  @action
  error(error, transition) {
    this.router.replaceWith('/questions');
  }
}
