import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('Contacts');

/**
 * Create the schema for Contacts
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,

  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,

  },
  address: {
    label: 'address',
    type: String,
    optional: false,
    max: 200,

  },
  telephone: {
    label: 'telephone',
    type: String,
    optional: false,
    max: 200,

  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,

  },

});

Contacts.attachSchema(ContactsSchema);
