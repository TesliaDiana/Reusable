'use strict';

const range = (start, end) => ((end < start) ? [] : (new Array(end - start + 1))
  .fill(0).map((v, i) => start + i));
module.exports = { range };
