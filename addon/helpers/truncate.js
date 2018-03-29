import { helper } from '@ember/component/helper';

export function truncate([string, characterLimit = 140, useEllipsis = true]) {
  let limit = useEllipsis ? characterLimit - 3 : characterLimit;

  if (string && string.length > limit) {
    return useEllipsis ? `${string.substring(0, limit)}...` : string.substring(0, limit);
  } else {
    return string;
  }
}

export default helper(truncate);
