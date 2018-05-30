import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/string';

moduleForComponent('titleize', 'Integration | Helper | {{titleize}}', {
  integration: true
});

test('It titleizes a string', function(assert) {
  this.render(hbs`
    {{titleize 'my big fat greek wedding'}}
  `);

  let expected = 'My Big Fat Greek Wedding';

  assert.equal(this.$().text().trim(), expected, 'titleized value');
});

test('It handles undefined', function(assert) {
  this.render(hbs`
    {{titleize nostring}}
  `);

  assert.equal(this.$().text().trim(), '', 'No value');
});

test('It handles null', function(assert) {
  this.set('value', null);
  this.render(hbs`{{titleize value}}`);

  assert.equal(this.$().text().trim(), '', 'No value');
});

test('It handles a SafeString', function(assert) {
  this.set('title', htmlSafe('my big fat greek wedding'));

  this.render(hbs`{{titleize title}}`);

  let expected = 'My Big Fat Greek Wedding';

  assert.equal(this.$().text().trim(), expected, 'correctly titleizes a SafeString');
});
