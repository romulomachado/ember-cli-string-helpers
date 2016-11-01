# ember-cli-string-helpers
![Download count all time](https://img.shields.io/npm/dt/ember-cli-string-helpers.svg) [![CircleCI](https://circleci.com/gh/romulomachado/ember-cli-string-helpers.svg?style=shield)](https://circleci.com/gh/romulomachado/ember-cli-string-helpers) [![npm version](https://badge.fury.io/js/ember-cli-string-helpers.svg)](https://badge.fury.io/js/ember-cli-string-helpers) [![Ember Observer Score](http://emberobserver.com/badges/ember-cli-string-helpers.svg)](http://emberobserver.com/addons/ember-cli-string-helpers)

String helpers for Ember. Extracted from the great [DockYard's ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers/).

To install:

```no-highlight
ember install ember-cli-string-helpers
```

## Available helpers

* [`camelize`](#camelize)
* [`capitalize`](#capitalize)
* [`classify`](#classify)
* [`dasherize`](#dasherize)
* [`html-safe`](#html-safe)
* [`truncate`](#truncate)
* [`titleize`](#titleize)
* [`underscore`](#underscore)
* [`w`](#w)

## Usage

#### `camelize`
Camelizes a string using `Ember.String.camelize`.

```hbs
{{camelize "hello jim bob"}}
{{camelize stringWithDashes}}
```

**[⬆️ back to top](#available-helpers)**

#### `capitalize`
Capitalizes a string using `Ember.String.capitalize`.

```hbs
{{capitalize "hello jim bob"}}
{{capitalize fullName}}
```

**[⬆️ back to top](#available-helpers)**

#### `classify`
Classifies a string using `Ember.String.classify`.

```hbs
{{classify "hello jim bob"}}
{{classify stringWithDashes}}
```

**[⬆️ back to top](#available-helpers)**

#### `dasherize`
Dasherizes a string using `Ember.String.dasherize`.

```hbs
{{dasherize "whatsThat"}}
{{dasherize phrase}}
```

**[⬆️ back to top](#available-helpers)**

#### `html-safe`
Mark a string as safe for unescaped output with Ember templates using `Ember.String.htmlSafe`.

```hbs
{{html-safe "<div>someString</div>"}}
{{html-safe unsafeString}}
```

**[⬆️ back to top](#available-helpers)**

#### `titleize`
Titleizes a string

```hbs
{{titleize "my big fat greek wedding"}}
{{titleize phrase}}
```

**[⬆️ back to top](#available-helpers)**

#### `truncate`
Truncates a string with a characterLimit.

```hbs
{{truncate "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 20}}
{{truncate phrase}}
```

**[⬆️ back to top](#available-helpers)**

#### `underscore`
Capitalizes a string using `Ember.String.underscore`.

```hbs
{{underscore "whatsThat"}}
{{underscore phrase}}
```

**[⬆️ back to top](#available-helpers)**

#### `w`
Splits a string on whitespace and/or turns multiple words into an array

```hbs
{{#each (w "First" "Second" "Last") as |rank|}}
  Our {{rank}} place winner is ...
{{/each}}
```

or:

```hbs
{{#each (w "First Second Last") as |rank|}}
  Our {{rank}} place winner is ...
{{/each}}
```

See also: [Ember `w` documentation](http://emberjs.com/api/classes/Ember.String.html#method_w)

**[⬆️ back to top](#available-helpers)**

## See also:

* [ember-composable-helpers](https://github.com/dockyard/ember-composable-helpers)
* [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers)

## Legal

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
