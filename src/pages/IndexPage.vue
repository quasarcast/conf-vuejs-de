<script setup>
const mode = process.env.MODE
</script>

<template>
  <q-page class="column flex-center">
    <h1>💚 Vue!</h1>
    <h2>{{ mode }}</h2>
  </q-page>
</template>
