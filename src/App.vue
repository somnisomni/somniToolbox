<template>
  <VApp>
    <div>App</div>

    <RouterView />
  </VApp>
</template>

<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";

@Component
export default class App extends Vue { }
</script>
