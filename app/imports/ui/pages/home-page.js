import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  contactsList() {
    return Contacts.find();
  },
});
Template.Home_Page.onCreated(function onCreated() {
  this.subscribe('Contacts');
});