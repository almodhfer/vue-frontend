<template>
  <nav>
    <v-app-bar  app fixed>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Todo</span>
        <span>Ninj</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn text>
        <span>Logout</span>
        <v-icon>mdi-location-exit</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- :mini-variant.sync="mini"  -->
    <v-navigation-drawer v-model="drawer" right app clipped clipped-right>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <!-- <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
        </v-btn>-->
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="drawer = !drawer">
          <v-list-item-icon>
            <v-icon>mdi-close-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>غلق</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Nav extends Vue {
  public drawer = false;
  public mini = true;
  public items = [
    { title: "Home", icon: "mdi-home-city" },
    { title: "My Account", icon: "mdi-account" },
    { title: "Users", icon: "mdi-account-group-outline" }
  ];
}
</script>