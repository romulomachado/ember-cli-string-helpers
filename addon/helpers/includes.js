import { helper } from "@ember/component/helper";
import { isHTMLSafe } from "@ember/string";

export function includes([string, phrase]) {
  if (isHTMLSafe(string)) {
    string = string.string;
  }
  if (isHTMLSafe(phrase)) {
    phrase = phrase.string;
  }

  return phrase.indexOf(string) !== -1;
}

export default helper(includes);
