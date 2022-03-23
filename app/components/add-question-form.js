import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddQuestionFormComponent extends Component {
  @service store;
  @tracked invalidTitle = false;
  @tracked invalidDescription = false;
  @tracked title = '';
  @tracked description = '';
  @action
  addQuestion() {
    let { title, description } = this;
    let isValidTitle = !isEmpty(title);
    let isValidDescription = !isEmpty(description);

    if (isValidTitle && isValidDescription) {
      let newId = Math.random(36).toString().substring(2, 9);
      let today = new Date().toLocaleDateString('en-US');

      this.args.addQuestion({
        id: newId,
        title,
        description,
        answersCount: 0,
        createdAt: today,
      });
      this.invalidTitle = false;
      this.invalidDescription = false;
      this.title = '';
      this.description = '';
    } else {
      this.invalidTitle = !isValidTitle;
      this.invalidDescription = !isValidDescription;
    }
  }
}
