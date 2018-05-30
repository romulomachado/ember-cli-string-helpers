import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from '@ember/string';

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

test('It correctly handles single string input', function(assert) {
  this.render(hbs `{{humanize "a"}}`);

  let expected = 'A';

  assert.equal(this.$().text().trim(), expected, 'converts underscored to humanized');
});

test('It correctly handles empty string input', function(assert) {
  this.render(hbs `{{humanize ""}}`);

  let expected = '';

  assert.equal(this.$().text().trim(), expected, 'converts underscored to humanized');
});

test('It correctly handles undefined input', function(assert) {
  this.render(hbs `{{humanize undefined}}`);

  let expected = '';

  assert.equal(this.$().text().trim(), expected, 'converts underscored to humanized');
});

test('It correctly handles capitalised input with spaces', function(assert) {
  this.render(hbs `{{humanize "CHOOSE AN ITEM COLOR"}}`);

  let expected = 'Choose an item color';

  assert.equal(this.$().text().trim(), expected, 'converts capitals to humanized');
});

test('It correctly handles capitalised input with underscores', function(assert) {
  this.render(hbs `{{humanize "CHOOSE_AN_ITEM_COLOR"}}`);

  let expected = 'Choose an item color';

  assert.equal(this.$().text().trim(), expected, 'converts capitals to humanized');
});

test('It correctly handles capitalised input with dashes', function(assert) {
  this.render(hbs `{{humanize "CHOOSE-AN-ITEM-COLOR"}}`);

  let expected = 'Choose an item color';

  assert.equal(this.$().text().trim(), expected, 'converts capitals to humanized');
});

test('It correctly handles mixed-case input with spaces', function(assert) {
  this.render(hbs `{{humanize "cHoOsE aN iTeM cOlOr"}}`);

  let expected = 'Choose an item color';

  assert.equal(this.$().text().trim(), expected, 'converts capitals to humanized');
});

test('It correctly handles mixed-case input with underscores', function(assert) {
  this.render(hbs `{{humanize "cHoOsE_aN_iTeM_cOlOr"}}`);

  let expected = 'Choose an item color';

  assert.equal(this.$().text().trim(), expected, 'converts capitals to humanized');
});

test('It correctly handles mixed-case input with dashes', function(assert) {
  this.render(hbs `{{humanize "cHoOsE-aN-iTeM-cOlOr"}}`);

  let expected = 'Choose an item color';

  assert.equal(this.$().text().trim(), expected, 'converts capitals to humanized');
});

test('It handles a SafeString', function(assert) {
  this.set('sentence', htmlSafe('cHoOsE aN iTeM cOlOr'));

  this.render(hbs `{{humanize sentence}}`);

  let expected = 'Choose an item color';

  assert.equal(this.$().text().trim(), expected, 'converts SafeString capitals to humanized');
});
