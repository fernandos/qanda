import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | question-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('question', 'Any question');

    await render(hbs`<QuestionItem
      @question={{this.question}}
    />`);

    assert.dom(this.element).exists();
  });
});
