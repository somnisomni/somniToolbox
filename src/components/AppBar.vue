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
      <VAppBarTitle v-html="APP_NAME_HTML" /> <!-- eslint-disable-line vue/no-v-text-v-html-on-component -->
    </VSlideXTransition>

    <AppBarMenu />
  </VAppBar>
</template>

<script lang="ts">
import { APP_NAME_HTML } from "@/constants";
import { Component, Vue } from "vue-facing-decorator";
import AppBarMenu from "./AppBarMenu.vue";

@Component({
  components: {
    AppBarMenu,
  },
})
export default class AppBar extends Vue {
  readonly APP_NAME_HTML = APP_NAME_HTML;

  get isHomeRoute(): boolean {
    return this.$route.name === "home";
  }
}
</script>
