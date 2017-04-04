import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  { first: 'Anh', last: 'Lam', address: '801 South Street', telephone: '808-825-7199', email: 'lamanh@hawaii.edu' },

  { first: 'Josh', last: 'Lam', address: '801 Bell Loop', telephone: '808-887-9999', email: 'lamj@hawaii.edu' },
  {
    first: 'Bob',
    last: 'Nakata',
    address: '88 Hemmingway Road',
    telephone: '808-825-0099',
    email: 'bobnat@hawaii.edu'
  },

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
