<template>
  <div class="h-[70px] max-h-[70px] lg:h-[82px] lg:max-h-[82px] w-full bg-white flex items-center justify-between">
    <img
        class="w-auto h-[50px] object-cover"
        src="../../assets/Logo.png"
        alt="company-logo"
        />
    <router-link to="/" class="cursor-pointer">
      <span>
        Home
      </span>
    </router-link>
    <router-link to="/list-recipes" class="cursor-pointer">
      <span>
        List of Recipes
      </span>
    </router-link>
    <router-link to="/about-us" class="cursor-pointer">
      <span>
        About us
      </span>
    </router-link>
    <router-link to="/login" class="cursor-pointer">
      <span>
        Login
      </span>
    </router-link>
  </div>
</template>
