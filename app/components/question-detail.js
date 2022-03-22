import Component from '@glimmer/component';
import { alias } from '@ember/object/computed';

export default class QuestionDetailComponent extends Component {
  @alias('args.questionId') questionId

  get filteredAnswers() {
    return this.args.answers.filter((answer) => {
      return answer.questionId === this.questionId;
    });
  }
}
