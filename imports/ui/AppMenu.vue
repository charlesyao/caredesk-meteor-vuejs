<template>
    <div class="app-menu">
        <nav-bar></nav-bar>
        <footer-section></footer-section>
        <!--<router-link :to="{ name:'home' }" exact>Home</router-link>
        <router-link :to="{ name:'page1' }">Page 1</router-link>
        <router-link :to="{ name:'/page2' }">Page 2</router-link>-->
    </div>
</template>

<script>
    import NavBar from '/imports/ui/navbar.vue';
    import FooterSection from '/imports/ui/footer.vue';

    import AppMenu from '/imports/ui/Home.vue';

    export default {
        components: {
            AppMenu,
            NavBar,
            FooterSection
        }
    }
</script>

<style scoped>
    .app-menu {
        margin: 0;
        text-align: center;
    }
    .app-menu a {
        display: inline-block;
        padding: 6px;
        margin: 0 6px;
        border-radius: 3px;
    }
    .app-menu a.v-link-active {
        background: #40b883;
        color: white;
    }
</style>