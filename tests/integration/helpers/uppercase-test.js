import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uppercase', 'Integration | Helper | {{uppercase}}', {
  integration: true
});

test('It converts all lowercase to uppercase', function(assert) {
  this.render(hbs`{{uppercase "all lowercase"}}`);

  let expected = 'ALL LOWERCASE';

  assert.equal(this.$().text().trim(), expected, 'converts all lowercase to uppercase');
});

test('It converts mixed case to uppercase', function(assert) {
  this.render(hbs`{{uppercase "UPPER and lower CaSe"}}`);

  let expected = 'UPPER AND LOWER CASE';

  assert.equal(this.$().text().trim(), expected, 'converts upper and lower case to uppercase');
});

test('It leaves special characters untouched', function(assert) {
  this.render(hbs`{{uppercase "special @&\/*-+^\`"}}`);

  let expected = 'SPECIAL @&/*-+^`';

  assert.equal(this.$().text().trim(), expected, 'ignores special characters');
});

test('It converts accented characters to uppercase', function(assert) {
  this.render(hbs`{{uppercase "âêîôûäëïöüéàè"}}`);

  let expected = 'ÂÊÎÔÛÄËÏÖÜÉÀÈ';

  assert.equal(this.$().text().trim(), expected, 'converts accented characters to uppercase');
});

test('It correctly handles empty string input', function(assert) {
  this.render(hbs`{{uppercase ""}}`);

  let expected = '';

  assert.equal(this.$().text().trim(), expected, 'renders empty string if input is empty string');
});

test('It correctly handles undefined input', function(assert) {
  this.render(hbs`{{uppercase undefined}}`);

  let expected = '';

  assert.equal(this.$().text().trim(), expected, 'renders empty string if undefined input');
});
