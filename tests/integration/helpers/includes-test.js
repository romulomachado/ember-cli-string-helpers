import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/string';

module('Integration | Helper | {{includes}}', function(hooks) {
  setupRenderingTest(hooks);

  test('It returns the correct value when the phrase is a string', async function(assert) {
    await render(
      hbs`{{includes "elit" "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}`
    );

    let expected = 'true';

    assert.dom('*').hasText(expected, 'correct value when phrase is a string');
  });

  test('It returns the correct value when the phrase is a string array', async function(assert) {
    this.set('string', 'dolor');
    this.set('phrase', ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit."]);
    await render(
      hbs`{{includes "dolor" phrase}}`
    );

    let expected = 'true';

    assert.dom('*').hasText(expected, 'correct value when phrase is a string array');
  });

  test('It returns the correct value when the string is not in the phrase', async function(assert) {
    await render(
      hbs`{{includes "notlatin" "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}}`
    );

    let expected = 'false';

    assert.dom('*').hasText(expected, 'correct value when string is not in the phrase');
  });

  test('It handles a SafeString for both parameters', async function(assert) {
    this.set('string', htmlSafe('amet'));
    this.set('phrase', htmlSafe('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));

    await render(hbs`{{includes string phrase}}`);

    let expected = 'true';

    assert.dom('*').hasText(expected, 'correctly handles SafeStrings');
  });
});
