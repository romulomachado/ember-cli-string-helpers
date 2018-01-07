import { helper } from '@ember/component/helper';
import uppercaseLib from 'ember-cli-string-helpers/utils/uppercase';
import createStringHelperFunction from '../-private/create-string-helper';

export const uppercase = createStringHelperFunction(uppercaseLib);
export default helper(uppercase);
