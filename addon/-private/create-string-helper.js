import { isHTMLSafe } from '@ember/string';

export default function(stringFunction) {
  return function([string]) {
    if (isHTMLSafe(string)) {
      string = string.string;
    }

    string = string || '';
    return stringFunction(string);
  };
}
