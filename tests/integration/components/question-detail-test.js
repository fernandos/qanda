import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | answers-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('questionId', 1);
    this.set('answers', []);

    await render(hbs`<AnswersList
      @questionId={{this.questionId}}
      @answers={{this.answers}}
      />`);

    assert.dom(this.element).exists();
  });
});
