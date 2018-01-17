import { helper } from '@ember/component/helper';
import { htmlSafe as _htmlSafe } from '@ember/string';
import createStringHelperFunction from '../-private/create-string-helper';

export const htmlSafe = createStringHelperFunction(_htmlSafe);
export default helper(htmlSafe);
