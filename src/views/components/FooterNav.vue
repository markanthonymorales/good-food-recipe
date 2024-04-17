<script setup lang="ts">
  const yearToday: number = new Date().getFullYear();
</script>
<template>
    <div class="w-full bg-white flex items-center justify-center py-3">
      <router-link to="/terms-conditions" class="cursor-pointer mx-2">
        <span>
          Terms and Conditions
        </span>
      </router-link> | 
      <router-link to="/privacy-policy" class="cursor-pointer mx-2">
        <span>
          Privacy Policy
        </span>
      </router-link>
    </div>
    <div class="w-full w-full bg-white flex items-center justify-center py-3">
      <span>
        &copy; Copyrights <span id="year" class="text-info font-black">{{ yearToday }}</span> by Anon. All rights reserved.
      </span>
    </div>
  </template>
  