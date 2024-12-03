'use strict';

const rangeOdd = (start, end) => {
  if (end < start) return [];
  const sub = end - start;
  const sub1 = sub & 1;
  const M = Array((sub >> 1) + sub1 + (start & (1 - sub1))).fill(0)
    .map((value, i) => (((i << 1) + 1 + start) - (((i << 1) + start) & 1)));
  return M;
};
module.exports = { rangeOdd };
