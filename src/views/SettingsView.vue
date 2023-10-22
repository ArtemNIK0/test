<template>
  <main>
    <h1>Регистрация</h1>

    <footer>
      <router-link :to="{ name: 'home' }"> На главную </router-link>
    </footer>
  </main>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>
