import Model, { attr } from '@ember-data/model';

export default class AnswerModel extends Model {
  @attr questionId;
  @attr description;
  @attr createdAt;
}
