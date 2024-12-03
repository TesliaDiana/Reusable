'use strict';

const phonebook =
[
  { name: 'Lisa', phone: '+380 167 43 80' },
  { name: 'Nochka', phone: '+380 000 09 12' },
  { name: 'Adel', phone: '+380 273 83 29' }
];

const findPhoneByName = (name) => {
  for (const e of phonebook) {
    if (e.name === name) return e.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
