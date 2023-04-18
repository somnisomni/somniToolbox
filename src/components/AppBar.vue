<template>
  <VAppBar>
    <!-- Navigation Drawer toggle button -->
    <VAppBarNavIcon icon="mdi-menu" />

    <!-- Home button / App title -->
    <VSlideXTransition group leave-absolute>
      <VBtn v-if="!isHomeRoute"
            :to="{ name: 'home' }"
            icon="mdi-home"
            flat />
      <VAppBarTitle>{{ APP_NAME }}</VAppBarTitle>
    </VSlideXTransition>

    <!-- App bar menu -->
    <VMenu>
      <template v-slot:activator="{ props }">
        <VAppBarNavIcon icon="mdi-dots-vertical" v-bind="props" />
      </template>

      <VList>
        <VListItem v-for="item in APP_MENU_DATA"
                   :key="item.id"
                   :value="item.id"
                   :prepend-icon="item.icon"
                   :to="item.route">
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </VAppBar>

</template>

<script lang="ts">
import { APP_NAME } from "@/constants";
import { Component, Vue } from "vue-facing-decorator";

interface AppMenuData {
  id: string,
  title: string,
  icon: string,
  route: string,
}

@Component
export default class AppBar extends Vue {
  readonly APP_NAME = APP_NAME;

  readonly APP_MENU_DATA: AppMenuData[] = [
    {
      "id": "help",
      "title": "Help",
      "icon": "mdi-help-circle",
      "route": "/help",
    },
  ];

  get isHomeRoute(): boolean {
    return this.$route.name === "home";
  }
}
</script>
