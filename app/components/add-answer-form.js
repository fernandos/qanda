import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class AddAnswerFormComponent extends Component {
  @service store;
  @tracked invalidForm = false;
  @tracked description = '';
  get questionId() {
    return this.args.questionId;
  }

  @action
  addAnswer() {
    let { description, questionId } = this;
    let isValid = !isEmpty(description);
    if (isValid) {
      let newId = Math.random(36).toString().substring(2, 9);
      let today = new Date().toLocaleDateString('en-US');

      this.args.addAnswer({
        id: newId,
        questionId,
        description,
        createdAt: today,
      });
      this.invalidForm = false;
      this.description = '';
    } else {
      this.invalidForm = true;
    }
  }
}
