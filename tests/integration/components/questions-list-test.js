import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | questions-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('questions', []);

    await render(hbs`<QuestionsList
      @questions={{this.questions}}
    />`);

    assert.dom(this.element).exists();
  });
});
