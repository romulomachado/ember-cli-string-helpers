import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/string';

moduleForComponent('lowercase', 'Integration | Helper | {{lowercase}}', {
  integration: true
});

test('It converts all uppercase to lowercase', function(assert) {
  this.render(hbs`{{lowercase "ALL UPPERCASE"}}`);

  let expected = 'all uppercase';

  assert.equal(this.$().text().trim(), expected, 'converts all uppercase to lowercase');
});

test('It converts mixed case to lowercase', function(assert) {
  this.render(hbs`{{lowercase "UPPER and lower CaSe"}}`);

  let expected = 'upper and lower case';

  assert.equal(this.$().text().trim(), expected, 'converts upper and lower case to lowercase');
});

test('It leaves special characters unmodified', function(assert) {
  this.render(hbs`{{lowercase "SPECIAL @&\/*-+^\`"}}`);

  let expected = 'special @&/*-+^`';

  assert.equal(this.$().text().trim(), expected, 'converts special characters');
});

test('It converts accented characters to lowercase', function(assert) {
  this.render(hbs`{{lowercase "ÂÊÎÔÛÄËÏÖÜÉÀÈ"}}`);

  let expected = 'âêîôûäëïöüéàè';

  assert.equal(this.$().text().trim(), expected, 'converts accented characters to lowercase');
});

test('It correctly handles empty string input', function(assert) {
  this.render(hbs`{{lowercase ""}}`);

  let expected = '';

  assert.equal(this.$().text().trim(), expected, 'renders empty string if input is empty string');
});

test('It correctly handles undefined input', function(assert) {
  this.render(hbs`{{lowercase undefined}}`);

  let expected = '';

  assert.equal(this.$().text().trim(), expected, 'renders empty string if undefined input');
});

test('It handles a SafeString', function(assert) {
  this.set('scream', htmlSafe('NOOOOOOOO'));

  this.render(hbs`{{lowercase scream}}`);

  let expected = 'noooooooo';

  assert.equal(this.$().text().trim(), expected, 'converts all uppercase SafeString to lowercase');
});
