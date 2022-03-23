import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class AddAnswerFormComponent extends Component {
  @service store;
  @tracked invalidForm = false;
  get questionId() {
    return this.args.questionId;
  }

  @action
  addAnswer() {
    let { description } = this;
    let isValid = !isEmpty(description);
    if (isValid) {
      this.args.addAnswer({
        id: Math.floor(Math.random() * 100),
        questionId: this.questionId,
        description,
        createdAt: new Date(),
      });
      this.invalidForm = false;
    } else {
      this.invalidForm = true;
    }
  }
}
