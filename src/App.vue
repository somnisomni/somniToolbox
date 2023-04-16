<template>
  <div>App</div>

  <RouterView />
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import { RouterView } from "vue-router";

@Component
export default class App extends Vue { }
</script>
