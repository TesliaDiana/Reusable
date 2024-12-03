'use strict';

const phonebook = {
  Lisa: '+380 167 43 80',
  Nochka: '+380 000 09 12',
  Adel: '+380 273 83 29'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
