<script setup lang="ts">
    import { ref, type Ref, onMounted } from "vue";
    import { useIsLogged } from "../../composables/secret-key";
    const isLogged: Ref<boolean> = ref(false);
    const logout = async () => {
      localStorage.setItem('accepted-key', '');
      window.location.reload();
    };
    onMounted( async () => {
      isLogged.value = await useIsLogged();
    });
</script>
<template>
  <div class="h-[70px] max-h-[70px] lg:h-[82px] lg:max-h-[82px] w-full bg-white flex items-center justify-between text-center">
    <img
        class="w-auto h-[50px] object-cover"
        src="../../assets/Logo.png"
        alt="company-logo"
        />
    <router-link to="/" class="hover:bg-gray-600 hover:text-white cursor-pointer">
      <span>
        Home
      </span>
    </router-link>
    <router-link to="/list-recipes" class="hover:bg-gray-600 hover:text-white cursor-pointer">
      <span>
        List of Recipes
      </span>
    </router-link>
    <router-link to="/about-us" class="hover:bg-gray-600 hover:text-white cursor-pointer">
      <span>
        About us
      </span>
    </router-link>
    <router-link v-if="!isLogged" to="/login" class="hover:bg-gray-600 hover:text-white cursor-pointer">
      <span>
        Login
      </span>
    </router-link>
    <router-link v-if="isLogged" to="/admin" class="hover:bg-gray-600 hover:text-white cursor-pointer">
      <span>
        Administrator
      </span>
    </router-link>
    <router-link v-if="isLogged" to="/" @click="logout" class="hover:bg-gray-600 hover:text-white cursor-pointer">
      <span>
        Logout
      </span>
    </router-link>
  </div>
</template>
