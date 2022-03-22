import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class QuestionsController extends Controller {
  @service store;
  @action
  addQuestion(newQuestion) {
    this.store.createRecord('question', newQuestion);
  }
}
