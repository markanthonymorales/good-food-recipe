<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
    // import useData from "../composables/data-compiler";
    // import axios from 'axios';
    // let data: Ref<any> = ref('');

    // onMounted(async () => {
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        // data.value = await axios.get('https://panlasangpinoy.com/sinabawang-isda-at-gulay/');
        // console.log(data.value.data);
    // });
</script>
<template>
    <div id="admin" class="h-full w-full container mx-auto font-inter p-2">
        <Navigation />
        <!-- TODO: Scapper actions -->
        <FooterNav />
    </div>
</template>