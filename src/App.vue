<template>
  <div id="app">
    <v-app>
      <Nav></Nav>
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";

@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {}
</script>
