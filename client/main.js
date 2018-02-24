// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';
window.$ = window.jQuery = require('jquery');

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import './main.html';

// Main app
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue(App).$mount(document.body);
});