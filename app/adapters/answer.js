import ApplicationAdapter from './application';

export default class AnswerAdapter extends ApplicationAdapter {
  urlForFindRecord(id, modelName, snapshot) {
    return `${this.namespace}/${modelName}/${id}`;
  }
  urlForQuery(query) {
    let {
      filter: { id },
    } = query;

    return `${this.namespace}/answer/${id}`;
  }
}
