<template>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

interface AppMenuData {
  id: string,
  title: string,
  icon: string,
  route: string,
}

@Component
export default class AppBarMenu extends Vue {
  readonly APP_MENU_DATA: AppMenuData[] = [
    {
      "id": "help",
      "title": "Help",
      "icon": "mdi-help-circle",
      "route": "/help",
    },
  ];
}
</script>
