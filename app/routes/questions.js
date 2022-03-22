import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class QuestionsRoute extends Route {
  @service store;

  async model() {
    return hash({
      questions: this.store.findAll('question'),
    });
  }
}
