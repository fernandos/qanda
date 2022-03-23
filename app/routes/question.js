import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class QuestionRoute extends Route {
  @service store;
  @service router;

  model(params) {
    const { id } = params;
    return hash({
      id,
      question: this.store.findAll('question').then((questions) => {
        return questions.find((item) => item.id === id);
      }),
      answers: this.store.findAll('answer'),
    });
  }
}
