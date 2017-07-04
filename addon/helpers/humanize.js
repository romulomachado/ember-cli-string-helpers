import { helper } from 'ember-helper';

const regex = /_+|-+/g;
const replacement = ` `;

// The substituted value will be contained in the result variable
export function humanize([string]) {
  if (string === undefined || string === null) {
    return '';
  }

  let result = string.toLowerCase().replace(regex, replacement);
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export default helper(humanize);
