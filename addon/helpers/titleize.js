import { helper } from 'ember-helper';
import titleizeLib from 'ember-cli-string-helpers/utils/titleize';
import createStringHelperFunction from '../-private/create-string-helper';

export const titleize = createStringHelperFunction(titleizeLib);
export default helper(titleize);
