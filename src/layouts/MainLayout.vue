<script setup>
import { ref } from 'vue'
import { mdiBluetooth, mdiHome, mdiQrcode, mdiTable } from '@quasar/extras/mdi-v7'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <q-item
          exact
          :to="{ name: 'home' }"
        >
          <q-item-section side>
            <q-icon :name="mdiHome" />
          </q-item-section>

          <q-item-section>
            Home
          </q-item-section>
        </q-item>

        <q-item :to="{ name: 'qr-scan' }">
          <q-item-section side>
            <q-icon :name="mdiQrcode" />
          </q-item-section>

          <q-item-section>
            Qr Scan
          </q-item-section>
        </q-item>

        <q-item :to="{ name: 'bluetooth' }">
          <q-item-section side>
            <q-icon :name="mdiBluetooth" />
          </q-item-section>

          <q-item-section>
            Bluetooth
          </q-item-section>
        </q-item>

        <q-item :to="{ name: 'table' }">
          <q-item-section side>
            <q-icon :name="mdiTable" />
          </q-item-section>

          <q-item-section>
            Table Component
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
