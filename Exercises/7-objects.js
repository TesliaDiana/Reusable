'use strict';

const fn = () => {
  const obj = { name: 1 };
  let obj2 = { name: 5 };
  obj.name++;
  obj2.name--;
  // це була непрацююча дія, тому його треба було видалити
  // obj = { abc: 9 };
  obj2 = { abc: 0 };
};

module.exports = { fn };
