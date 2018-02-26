<template>
	<div class="app">
		<nav-bar></nav-bar>
	<h1>Welcome to Meteor Vue JS Project</h1>
	
	<footer-link></footer-link>
	
	{{ msg }}

	</div>

</template>

<script>

import FooterLink from '/imports/ui/footer.vue';
import NavBar from '/imports/ui/navbar.vue';

	export default {

		components: {
			"footer-link" : FooterLink,
			"nav-bar" : NavBar
		},

		data: function (){
			return {
				msg: 'Hello'
			}
		}
	}
</script>