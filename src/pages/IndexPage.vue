<script setup>
import { BleClient } from '@capacitor-community/bluetooth-le'
import { ref } from 'vue'

//

const mode = process.env.MODE
</script>

<template>
  <q-page class="column flex-center">
    <h1>💚 Vue!</h1>
    <h2>{{ mode }}</h2>
  </q-page>
</template>
