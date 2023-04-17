<template>
  <VAppBar>
    <VAppBarNavIcon icon="mdi-menu" />
    <VAppBarTitle>{{ APP_NAME }}</VAppBarTitle>
  </VAppBar>
</template>

<script lang="ts">
import { APP_NAME } from "@/constants";
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class AppBar extends Vue {
  readonly APP_NAME = APP_NAME;
}
</script>
