import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('humanize', 'Integration | Helper | {{humanize}}', {
  integration: true
});

test('It converts underscores to spaces and capitalizes the first word', function(assert) {
  this.render(hbs `{{humanize "item_color"}}`);

  let expected = 'Item color';

  assert.equal(this.$().text().trim(), expected, 'converts underscored to humanized');
});

test('It converts dashes to spaces and capitalizes the first word', function(assert) {
  this.render(hbs `{{humanize "item-color-options"}}`);

  let expected = 'Item color options';

  assert.equal(this.$().text().trim(), expected, 'converts underscored to humanized');
});

test('It correctly handles undefined input', function(assert) {
  this.render(hbs `{{humanize undefined}}`);

  let expected = '';

  assert.equal(this.$().text().trim(), expected, 'converts underscored to humanized');
});
