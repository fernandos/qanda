import RESTAdapter from '@ember-data/adapter/rest';

export default class QuestionsAdapter extends RESTAdapter {
  namespace = 'api';
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
