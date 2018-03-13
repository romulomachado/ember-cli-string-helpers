import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trim', 'Integration | Helper | {{trim}}', {
  integration: true
});

test('It trim correctly', function(assert) {
  this.render(hbs`{{trim " aa  "}}`);

  let expected = 'aa';

  assert.equal(this.$().text(), expected, 'trim string as expected');
});

test('It correctly handles empty string input', function(assert) {
  this.render(hbs`{{trim ""}}`);

  let expected = '';

  assert.equal(this.$().text(), expected, 'renders empty string if input is empty string');
});

test('It correctly handles undefined input', function(assert) {
  this.render(hbs`{{trim undefined}}`);

  let expected = '';

  assert.equal(this.$().text(), expected, 'renders empty string if undefined input');
});
