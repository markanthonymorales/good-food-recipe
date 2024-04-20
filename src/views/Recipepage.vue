<script setup lang="ts">
    import Navigation from "./components/Navigation.vue";
    import FooterNav from "./components/FooterNav.vue";
    import { ref, type Ref, onMounted } from "vue";
    import { db } from "../composables/db";
    import { useRoute } from 'vue-router'
    import { Recipes } from '../types/recipes-type';

    const route = useRoute();
    const recipe: Ref<Recipes> = ref({});

    onMounted(async () => {
        const collection = db.recipes
        .orderBy('title')
        .filter((recipes) => typeof recipes.id !== "undefined" && recipes.id.toString() === route.params.id.toString() );
        let getData = await collection.toArray();
        if(getData.length > 0) {
            recipe.value = getData[0];
        }
    });
</script>
<template>
 <div id="privacy-policy" class="h-full w-full container mx-auto font-inter p-2">
    <Navigation />
    <article class="" v-if="recipe">
        <header class="py-2 text-[17px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium md:text-[28px] md:font-normal md:leading-[33.41px] md:tracking-[0.36px]">{{ recipe?.title }}</header>
        <section class="py-2">
            <div class="mb-2 ingredient-container" v-if="recipe?.ingredients">
                <p class="text-[15px] text-black">Ingredients</p>
                <ol class="list-decimal list-inside ingredient my-2 pl-2">
                    <li class="ingredient" v-for="ingredient in recipe?.ingredients">{{ ingredient }}</li>
                </ol>
            </div>

            <div class="mb-2 instructions-container" v-if="recipe?.instructions">
                <p class="text-[15px] text-black">Instructions</p>
                <ol class="list-decimal list-inside instructions my-2 pl-2">
                    <li class="instruction" v-for="instruction in recipe?.instructions">{{ instruction }}</li>
                </ol>
            </div>

            <div class="mb-2 nutrients-container" v-if="recipe?.nutrients">
                <p class="text-[15px] text-black">Nutrients</p>
                <ol class="list-decimal list-inside nutrients my-2 pl-2">
                    <li class="nutrient" v-for="nutrient in recipe?.nutrients">{{ nutrient }}</li>
                </ol>
            </div>

            <div class="mb-2 notes-container" v-if="recipe?.notes">
                <p class="text-[15px] text-black">Notes</p>
                <ol class="list-decimal list-inside notes my-2 pl-2">
                    <li class="note" v-for="note in recipe?.notes">{{ note }}</li>
                </ol>
            </div>
            <p v-if="recipe?.source"  class="text-info text-[12px]">{{ recipe?.source }}</p>
        </section>
        <FooterNav />
    </article>
    <p v-else class="text-danger">No found data...</p>
 </div>
</template>