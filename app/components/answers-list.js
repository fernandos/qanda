import Component from '@glimmer/component';
export default class AnswersListComponent extends Component {
  get questionId() {
    return this.args.questionId;
  }
  get filteredAnswers() {
    return this.args.answers.filter((answer) => {
      return answer.questionId === this.questionId;
    });
  }
}
