<script setup lang="ts">
  import Loader from "./views/components/Loader.vue";
</script>
<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <KeepAlive :exclude="['Checkout']">
        <Suspense>
          <component :is="Component" />
          <template #fallback>
            <Loader />
          </template>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
</template>
