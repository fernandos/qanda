import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddQuestionFormComponent extends Component {
  @service store;
  @tracked invalidForm = false;
  @action
  addQuestion(form) {
    let { title, description } = form;
    let isValid = !isEmpty(title) && !isEmpty(description);

    if (isValid) {
      this.args.addQuestion({
        id: Math.floor(Math.random() * 100),
        title,
        description,
        answersCount: 0,
        createdAt: new Date(),
      });
      this.invalidForm = false;
    } else {
      this.invalidForm = true;
    }
  }
}
