// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
//import {Vue} from 'meteor/akryum:vue';
window.$ = window.jQuery = require('jquery');

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import routerFactory from '/client/routes';

// App layout
import AppLayout from '/imports/ui/AppLayout.vue';

// App start
Meteor.startup(() => {
    // Start the router
    const router = routerFactory.create();
new Vue({
        router,
        render: h => h(AppLayout),
}).$mount('app');
});

//https://github.com/Akryum/meteor-vue2-example-routing/tree/master/imports/ui