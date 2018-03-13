import { helper } from '@ember/component/helper';
import trimLib from 'ember-cli-string-helpers/utils/trim';
import createStringHelperFunction from '../-private/create-string-helper';

export const trim = createStringHelperFunction(trimLib);
export default helper(trim);
