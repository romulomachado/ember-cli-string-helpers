import { helper } from '@ember/component/helper';
import lowercaseLib from 'ember-cli-string-helpers/utils/lowercase';
import createStringHelperFunction from '../-private/create-string-helper';

export const lowercase = createStringHelperFunction(lowercaseLib);
export default helper(lowercase);
